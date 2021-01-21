var $url = "/document/settings";

var data = utils.init({
  siteId: utils.getQueryInt("siteId"),
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
  langs: [
    {
      title: "印度尼西亚语",
      locale: "id-id",
      text: "Bahasa Indonesia",
    },
    {
      title: "马来语(马来西亚)",
      locale: "ms-my",
      text: "Bahasa Melayu",
    },
    {
      title: "波斯尼亚语(拉丁语)",
      locale: "bs-latn-ba",
      text: "Bosanski",
    },
    {
      title: "加泰罗尼亚语",
      locale: "ca-es",
      text: "Català",
    },
    {
      title: "捷克语",
      locale: "cs-cz",
      text: "Čeština",
    },
    {
      title: "丹麦语",
      locale: "da-dk",
      text: "Dansk",
    },
    {
      title: "德语(奥地利)",
      locale: "de-AT",
      text: "Deutsch (Österreich)",
    },
    {
      title: "德语(瑞士)",
      locale: "de-CH",
      text: "Deutsch (Schweiz)",
    },
    {
      title: "德语",
      locale: "de-de",
      text: "Deutsch",
    },
    {
      title: "爱沙尼亚语",
      locale: "et-ee",
      text: "Eesti",
    },
    {
      title: "英语(澳大利亚)",
      locale: "en-AU",
      text: "English (Australia)",
    },
    {
      title: "英语(加拿大)",
      locale: "en-CA",
      text: "English (Canada)",
    },
    {
      title: "英语(印度)",
      locale: "en-IN",
      text: "English (India)",
    },
    {
      title: "英语(爱尔兰)",
      locale: "en-IE",
      text: "English (Ireland)",
    },
    {
      title: "英语(马来西亚)",
      locale: "en-MY",
      text: "English (Malaysia)",
    },
    {
      title: "英语(新西兰)",
      locale: "en-NZ",
      text: "English (New Zealand)",
    },
    {
      title: "英语(新加坡)",
      locale: "en-SG",
      text: "English (Singapore)",
    },
    {
      title: "英语(南非)",
      locale: "en-ZA",
      text: "English (South Africa)",
    },
    {
      title: "英语(英国)",
      locale: "en-GB",
      text: "English (United Kingdom)",
    },
    {
      title: "英语(美国)",
      locale: "en-us",
      text: "English (United States)",
    },
    {
      title: "西班牙语(墨西哥)",
      locale: "es-MX",
      text: "Español (México)",
    },
    {
      title: "西班牙语",
      locale: "es-es",
      text: "Español",
    },
    {
      title: "巴斯克语",
      locale: "eu-es",
      text: "Euskara",
    },
    {
      title: "菲律宾语",
      locale: "fil-ph",
      text: "Filipino",
    },
    {
      title: "法语(比利时)",
      locale: "fr-BE",
      text: "Français (Belgique)",
    },
    {
      title: "法语(加拿大)",
      locale: "fr-CA",
      text: "Français (Canada)",
    },
    {
      title: "法语(瑞士)",
      locale: "fr-CH",
      text: "Français (Suisse)",
    },
    {
      title: "法语",
      locale: "fr-fr",
      text: "Français",
    },
    {
      title: "爱尔兰语",
      locale: "ga-ie",
      text: "Gaeilge",
    },
    {
      title: "加利西亚语",
      locale: "gl-es",
      text: "Galego",
    },
    {
      title: "克罗地亚语",
      locale: "hr-hr",
      text: "Hrvatski",
    },
    {
      title: "冰岛语",
      locale: "is-is",
      text: "Íslenska",
    },
    {
      title: "意大利语(瑞士)",
      locale: "it-CH",
      text: "Italiano (Svizzera)",
    },
    {
      title: "意大利语",
      locale: "it-it",
      text: "Italiano",
    },
    {
      title: "拉脱维亚语",
      locale: "lv-lv",
      text: "Latviešu",
    },
    {
      title: "卢森堡语",
      locale: "lb-lu",
      text: "Lëtzebuergesch",
    },
    {
      title: "立陶宛语",
      locale: "lt-lt",
      text: "Lietuvių",
    },
    {
      title: "匈牙利语",
      locale: "hu-hu",
      text: "Magyar",
    },
    {
      title: "马耳他语",
      locale: "mt-mt",
      text: "Malti",
    },
    {
      title: "荷兰语(比利时)",
      locale: "nl-BE",
      text: "Nederlands (België)",
    },
    {
      title: "荷兰语",
      locale: "nl-nl",
      text: "Nederlands",
    },
    {
      title: "书面挪威语",
      locale: "nb-NO",
      text: "Norsk Bokmål",
    },
    {
      title: "波兰语",
      locale: "pl-pl",
      text: "Polski",
    },
    {
      title: "葡萄牙语(巴西)",
      locale: "pt-BR",
      text: "Português (Brasil)",
    },
    {
      title: "葡萄牙语(葡萄牙)",
      locale: "pt-pt",
      text: "Português (Portugal)",
    },
    {
      title: "罗马尼亚语",
      locale: "ro-ro",
      text: "Română",
    },
    {
      title: "斯洛伐克语",
      locale: "sk-sk",
      text: "Slovenčina",
    },
    {
      title: "斯洛文尼亚语",
      locale: "sl-si",
      text: "Slovenski",
    },
    {
      title: "塞尔维亚语(拉丁语)",
      locale: "sr-latn-rs",
      text: "Srpski",
    },
    {
      title: "芬兰语",
      locale: "fi-fi",
      text: "Suomi",
    },
    {
      title: "瑞典语",
      locale: "sv-se",
      text: "Svenska",
    },
    {
      title: "越南语",
      locale: "vi-vn",
      text: "TiếngViệt",
    },
    {
      title: "土耳其语",
      locale: "tr-tr",
      text: "Türkçe",
    },
    {
      title: "希腊语",
      locale: "el-gr",
      text: "Ελληνικά",
    },
    {
      title: "波斯尼亚语(西里尔文)",
      locale: "bs-cyrl-ba",
      text: "Босански",
    },
    {
      title: "保加利亚语",
      locale: "bg-bg",
      text: "Български",
    },
    {
      title: "哈萨克语",
      locale: "kk-kz",
      text: "қазақ тілі",
    },
    {
      title: "俄语",
      locale: "ru-ru",
      text: "Русский",
    },
    {
      title: "塞尔维亚语(西里尔文)",
      locale: "sr-cyrl-rs",
      text: "Српски",
    },
    {
      title: "乌克兰语",
      locale: "uk-ua",
      text: "Українська",
    },
    {
      title: "希伯来语",
      locale: "he-il",
      text: "עברית&rlm;",
    },
    {
      title: "阿拉伯语",
      locale: "ar-sa",
      text: "العربية",
    },
    {
      title: "印地语",
      locale: "hi-in",
      text: "हिंदी",
    },
    {
      title: "泰语",
      locale: "th-th",
      text: "ไทย",
    },
    {
      title: "韩语",
      locale: "ko-kr",
      text: "한국어",
    },
    {
      title: "中文(简体)",
      locale: "zh-CN",
      text: "中文 (简体)",
    },
    {
      title: "中文(繁体)",
      locale: "zh-tw",
      text: "中文 (繁體)",
    },
    {
      title: "日语",
      locale: "ja-jp",
      text: "日本語",
    },
  ],

  panel: false,
  form: null,
});

var methods = {
  apiGet: function () {
    var $this = this;

    utils.loading(this, true);
    $api
      .get($url + "/" + this.siteId)
      .then(function (response) {
        var res = response.data;

        // $this.locales = res.locales;
      })
      .catch(function (error) {
        utils.error(error);
      })
      .then(function () {
        utils.loading($this, false);
      });
  },

  apiDelete: function (item) {
    var $this = this;

    utils.loading(this, true);
    $api
      .delete($url, {
        data: {
          id: item.id,
        },
      })
      .then(function (response) {
        var res = response.data;

        $this.locales = res.locales;
      })
      .catch(function (error) {
        utils.error(error);
      })
      .then(function () {
        utils.loading($this, false);
      });
  },

  apiSubmit: function () {
    var $this = this;

    utils.loading(this, true);
    $api
      .post($url, this.form)
      .then(function (response) {
        var res = response.data;

        $this.locales = res.locales;
        $this.$message.success(
          $this.form.id > 0 ? "修改成功！" : "添加成功！"
        );
        $this.panel = false;
      })
      .catch(function (error) {
        utils.error(error);
      })
      .then(function () {
        utils.loading($this, false);
      });
  },

  btnSubmitClick: function () {
    var $this = this;

    this.$refs.form.validate(function (valid) {
      if (valid) {
        $this.apiSubmit();
      }
    });
  },

  btnDeleteClick: function (item) {
    var $this = this;

    utils.alertDelete({
      title: "删除",
      text: "此操作将删除 " + item.title + "，确定吗？",
      callback: function () {
        $this.apiDelete(item);
      },
    });
  },

  btnEditClick: function (item) {
    this.form = item;
    this.panel = true;
  },

  btnCancelClick: function () {
    this.panel = false;
  },

  btnAddClick: function () {
    this.form = {
      path: null,
      lang: null,
      title: null,
      description: null
    };
    this.panel = true;
  }
};

var $vue = new Vue({
  el: "#main",
  data: data,
  methods: methods,
  created: function () {
    this.apiGet();
  },
});
