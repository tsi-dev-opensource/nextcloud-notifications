/*! third party licenses: js/vendor.LICENSE.txt */
import{V as c}from"./style-N1aAjoYj.chunk.mjs";import{n as f,N as _,l as d,c as l,v as p,s as g,a as h}from"./_plugin-vue2_normalizer-CZfd6CVi.chunk.mjs";import{N as m}from"./NcSettingsSection-B7SqDXbX-CUT6kiNP.chunk.mjs";const s={EMAIL_SEND_OFF:0,EMAIL_SEND_HOURLY:1,EMAIL_SEND_3HOURLY:2,EMAIL_SEND_DAILY:3,EMAIL_SEND_WEEKLY:4},v={name:"AdminSettings",components:{NcCheckboxRadioSwitch:_,NcSettingsSection:m},data(){return{batchtime_options:[{text:t("notifications","Never"),value:s.EMAIL_SEND_OFF},{text:t("notifications","1 hour"),value:s.EMAIL_SEND_HOURLY},{text:t("notifications","3 hours"),value:s.EMAIL_SEND_3HOURLY},{text:t("notifications","1 day"),value:s.EMAIL_SEND_DAILY},{text:t("notifications","1 week"),value:s.EMAIL_SEND_WEEKLY}],config:d("notifications","config")}},methods:{async updateSettings(){try{const i=new FormData;i.append("batchSetting",this.config.setting_batchtime),i.append("soundNotification",this.config.sound_notification?"yes":"no"),i.append("soundTalk",this.config.sound_talk?"yes":"no"),await l.post(p("apps/notifications/api/v2/settings/admin"),i),g(t("notifications","Your settings have been updated."))}catch(i){h(t("notifications","An error occurred while updating your settings.")),console.error(i)}}}};var E=function(){var i=this,o=i._self._c;return o("NcSettingsSection",{attrs:{name:i.t("notifications","Notifications defaults"),description:i.t("notifications","Configure the default notification settings for new users")}},[o("p",[o("label",{staticClass:"notification-frequency__label",attrs:{for:"notify_setting_batchtime"}},[i._v(" "+i._s(i.t("notifications","Send email reminders about unhandled notifications after:"))+" ")]),o("select",{directives:[{name:"model",rawName:"v-model",value:i.config.setting_batchtime,expression:"config.setting_batchtime"}],staticClass:"notification-frequency__select",attrs:{id:"notify_setting_batchtime"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,function(a){return a.selected}).map(function(a){var u="_value"in a?a._value:a.value;return u});i.$set(i.config,"setting_batchtime",e.target.multiple?r:r[0])},function(e){return i.updateSettings()}]}},i._l(i.batchtime_options,function(e){return o("option",{key:e.value,domProps:{value:e.value}},[i._v(" "+i._s(e.text)+" ")])}),0)]),o("NcCheckboxRadioSwitch",{attrs:{checked:i.config.sound_notification},on:{"update:checked":[function(e){return i.$set(i.config,"sound_notification",e)},i.updateSettings]}},[i._v(" "+i._s(i.t("notifications","Play sound when a new notification arrives"))+" ")]),o("NcCheckboxRadioSwitch",{attrs:{checked:i.config.sound_talk},on:{"update:checked":[function(e){return i.$set(i.config,"sound_talk",e)},i.updateSettings]}},[i._v(" "+i._s(i.t("notifications","Play sound when a call started (requires Nextcloud Talk)"))+" ")])],1)},S=[],N=f(v,E,S,!1,null,null);const L=N.exports;c.prototype.t=t,c.prototype.n=n,new c({el:"#notifications-admin-settings",render:i=>i(L)});
