var $url = "/admin/docs/settings"

var data = utils.initData({
  siteId: utils.getQueryInt("siteId"),
  form: {
    isDocsDisabled:false,
    isDocsCountByDay:false
  }
});

var methods = {
  apiGet: function () {
    var $this = this;

    utils.loading(this, true);
    $api.get($url + '/' + this.siteId).then(function (response) {
      var res = response.data;

      $this.form.isDocsDisabled = res.isDocsDisabled;
      $this.form.isDocsCountByDay = res.isDocsCountByDay;
    }).catch(function (error) {
      utils.error(error);
    }).then(function () {
      utils.loading($this, false);
    });
  },

  apiSubmit: function () {
    var $this = this;

    utils.loading(true);
    $api.post($url + '/' + this.siteId, this.form).then(function (response) {
      $this.$message.success('设置保存成功');
    }).catch(function (error) {
      utils.error(error);
    }).then(function () {
      utils.loading($this, false);
    });
  },

  btnSubmitClick: function () {
    var $this = this;

    this.$refs.form.validate(function(valid) {
      if (valid) {
        $this.apiSubmit();
      }
    });
  }
};

var $vue = new Vue({
  el: "#main",
  data: data,
  methods: methods,
  created: function () {
    this.apiGet();
  }
});
