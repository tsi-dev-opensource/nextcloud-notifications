/**
 * SPDX-FileCopyrightText: 2018 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import Vue from 'vue'

// Styles
import './styles/styles.scss'
import '@nextcloud/dialogs/style.css'

Vue.prototype.t = t
Vue.prototype.n = n
Vue.prototype.OC = OC
Vue.prototype.OCA = OCA

// eslint-disable-next-line
__webpack_nonce__ = btoa(OC.requestToken);
// eslint-disable-next-line
__webpack_public_path__ = OC.linkTo('notifications', 'js/');

export default new Vue({
	el: '#notifications',
	// eslint-disable-next-line vue/match-component-file-name
	name: 'NotificationsApp',
	components: {
		NotificationsApp: () => import(/* webpackPreload: true */'./NotificationsApp.vue'),
	},
	render: h => h('NotificationsApp'),
})
