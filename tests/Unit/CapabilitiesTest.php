<?php
/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */

namespace OCA\Notifications\Tests\Unit;

use OCA\Notifications\Capabilities;

class CapabilitiesTest extends TestCase {
	public function testGetCapabilities() {
		$capabilities = new Capabilities();

		$this->assertSame([
			'notifications' => [
				'ocs-endpoints' => [
					'list',
					'get',
					'delete',
					'delete-all',
					'icons',
					'rich-strings',
					'action-web',
					'user-status',
					'exists',
				],
				'push' => [
					'devices',
					'object-data',
					'delete',
				],
				'admin-notifications' => [
					'ocs',
					'cli',
				],
			],
		], $capabilities->getCapabilities());
	}
}
