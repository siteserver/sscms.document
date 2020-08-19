var $url = "/document/settings";

var data = utils.init({
  siteId: utils.getQueryInt("siteId"),
  path: '/',
  channels: null,
  allTemplates: null,
  templates: null,
  templateType: "All",
  channelIds: [],
  keyword: "",
  locales: [
    {
      path: "/",
      lang: "zh-CN",
      title: "中文文档",
      description: "中文文档介绍",
    },
    {
      path: "/en",
      lang: "en-US",
      title: "English Document",
      description: "English Document Description",
    },
  ],
  template: null,
  contentEditor: null,
});

var methods = {
  apiList: function () {
    var $this = this;

    utils.loading(this, true);
    $api
      .get($url + "/" + this.siteId)
      .then(function (response) {
        var res = response.data;

        $this.setEditorContent(`[
  { "text": "Home", "link": "/" },
  { "text": "Guide", "link": "/guide/" },
  { "text": "External", "link": "https://baidu.com" }
]`);

        //   $this.channels = res.channels;
        //   $this.allTemplates = $this.templates = res.templates;
      })
      .catch(function (error) {
        utils.error($this, error);
      })
      .then(function () {
        utils.loading($this, false);
      });
  },

  apiDefault: function (template) {
    var $this = this;

    utils.loading(this, true);
    $api
      .post($url + "/actions/default", {
        siteId: this.siteId,
        templateId: template.id,
      })
      .then(function (response) {
        var res = response.data;

        $this.channels = res.channels;
        $this.allTemplates = res.templates;
        $this.reload();
        $this.$message({
          type: "success",
          message: "默认模板设置成功！",
        });
      })
      .catch(function (error) {
        utils.error($this, error);
      })
      .then(function () {
        utils.loading($this, false);
      });
  },

  apiDelete: function (template) {
    var $this = this;

    utils.loading(this, true);
    $api
      .delete($url, {
        data: {
          siteId: this.siteId,
          templateId: template.id,
        },
      })
      .then(function (response) {
        var res = response.data;

        $this.channels = res.channels;
        $this.allTemplates = res.templates;
        $this.reload();
        $this.$message({
          type: "success",
          message: "模板删除成功！",
        });
      })
      .catch(function (error) {
        utils.error($this, error);
      })
      .then(function () {
        utils.loading($this, false);
      });
  },

  handleSelect: function(key, keyPath) {
    this.path = key;
  },

  setEditorContent: function (val) {
    var $this = this;

    setTimeout(function () {
      var el = document.getElementById('templateContent');
      var stackedit = new Stackedit();

      // Open the iframe
      stackedit.openFile({
        name: 'Filename', // with an optional filename
        content: {
          text: el.value // and the Markdown content.
        }
      });

      // Listen to StackEdit events and apply the changes to the textarea.
      stackedit.on('fileChange', (file) => {
        el.value = file.content.text;
      });
    }, 100)
  },

  btnFormatClick: function () {
    var $this = this;
    this.contentEditor
      .getAction("editor.action.formatDocument")
      .run()
      .then(function () {
        $this.$message({
          type: "success",
          message: "模板代码格式化成功!",
        });
      });
  },

  btnRestoreClick: function () {
    utils.openLayer({
      title: "还原历史版本",
      url: utils.getCmsUrl("templatesEditorLayerRestore", {
        siteId: this.siteId,
        templateId: this.templateId,
      }),
      full: true,
    });
  },

  tableRowClassName(scope) {
    if (scope.row.defaultTemplate) {
      return "default-row";
    }
    return "";
  },

  getTemplateType: function (templateType) {
    if (templateType === "IndexPageTemplate") {
      return "首页模板";
    } else if (templateType === "ChannelTemplate") {
      return "栏目模板";
    } else if (templateType === "ContentTemplate") {
      return "内容模板";
    } else if (templateType === "FileTemplate") {
      return "单页模板";
    }
    return "";
  },

  btnDefaultClick: function (template) {
    var $this = this;

    utils.alertWarning({
      title: "设置默认模板",
      text:
        "此操作将把模板 " +
        template.templateName +
        " 设为默认" +
        this.getTemplateType(template.templateType) +
        "，确认吗？",
      callback: function () {
        $this.apiDefault(template);
      },
    });
  },

  btnCopyClick: function (template) {
    var $this = this;

    utils.loading(this, true);
    $api
      .post($url + "/actions/copy", {
        siteId: this.siteId,
        templateId: template.id,
      })
      .then(function (response) {
        var res = response.data;

        $this.channels = res.channels;
        $this.allTemplates = res.templates;
        $this.reload();
        $this.$message({
          type: "success",
          message: "快速复制成功！",
        });
      })
      .catch(function (error) {
        utils.error($this, error);
      })
      .then(function () {
        utils.loading($this, false);
      });
  },

  btnCreateClick: function (template) {
    var $this = this;

    utils.loading(this, true);
    $api
      .post($url + "/actions/create", {
        siteId: this.siteId,
        templateId: template.id,
      })
      .then(function (response) {
        var res = response.data;

        parent.$vue.openPageCreateStatus();
      })
      .catch(function (error) {
        utils.error($this, error);
      })
      .then(function () {
        utils.loading($this, false);
      });
  },

  btnDeleteClick: function (template) {
    var $this = this;

    utils.alertDelete({
      title: "删除模板",
      text: "此操作将删除模板 " + template.templateName + "，确认吗？",
      callback: function () {
        $this.apiDelete(template);
      },
    });
  },

  btnAddClick: function (templateType) {
    location.href = this.getEditorUrl(templateType, 0);
  },

  getEditorUrl: function (templateType, templateId) {
    return utils.getCmsUrl("templatesEditor", {
      siteId: this.siteId,
      templateId: templateId,
      templateType: templateType,
    });
  },

  reload: function () {
    var $this = this;

    this.templates = _.filter(this.allTemplates, function (o) {
      var isTemplateType = true;
      var isChannels = true;
      var isKeyword = true;
      if ($this.templateType != "All") {
        isTemplateType = o.templateType === $this.templateType;
      }
      if ($this.channelIds.length > 0) {
        isChannels = false;
        for (var i = 0; i < $this.channelIds.length; i++) {
          var channelId = $this.channelIds[i][$this.channelIds[i].length - 1];
          if (o.channelIds && o.channelIds.indexOf(channelId) !== -1) {
            isChannels = true;
          }
        }
      }
      if ($this.keyword) {
        isKeyword =
          (o.templateName || "").indexOf($this.keyword) !== -1 ||
          (o.relatedFileName || "").indexOf($this.keyword) !== -1 ||
          (o.createdFileFullName || "").indexOf($this.keyword) !== -1;
      }

      return isTemplateType && isChannels && isKeyword;
    });
  },
};

var $vue = new Vue({
  el: "#main",
  data: data,
  methods: methods,
  created: function () {
    this.apiList();
  },
});
