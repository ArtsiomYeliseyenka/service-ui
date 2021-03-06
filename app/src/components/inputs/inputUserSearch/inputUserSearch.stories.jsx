/*
 * Copyright 2017 EPAM Systems
 *
 *
 * This file is part of EPAM Report Portal.
 * https://github.com/reportportal/service-ui
 *
 * Report Portal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Report Portal is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Report Portal.  If not, see <http://www.gnu.org/licenses/>.
 */

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { host } from 'storybook-host';
import { withReadme } from 'storybook-readme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { PROJECT_MANAGER, CUSTOMER, MEMBER, OPERATOR } from 'common/constants/projectRoles';
import { USER, ADMINISTRATOR } from 'common/constants/accountRoles';
import { InputUserSearch } from './inputUserSearch';
import README from './README.md';

storiesOf('Components/Inputs/InputUserSearch', module)
  .addDecorator(
    host({
      title: 'Input user search',
      align: 'center middle',
      background: 'white',
      backdrop: 'rgba(70, 69, 71, 0.2)',
      height: 400,
      width: 400,
    }),
  )
  .addDecorator(withReadme(README))
  .add('default state', () => <InputUserSearch />)
  .add(
    'Admin,projectId="superadmin_personal",with actions (type "test" in input, close DevTools, you get MOCK DATA)',
    () => {
      const mock = new MockAdapter(axios);
      const API_REQUEST =
        '/api/v1/user/search/?page.page=1&page.size=10&page.sort=login,ASC&term=test';
      mock.onGet(API_REQUEST).reply(200, {
        content: [
          {
            userId: '.elogin.new',
            email: 'elogin@gmaile.com',
            full_name: 'test',
            account_type: 'INTERNAL',
            userRole: ADMINISTRATOR,
            last_login: 1506685504247,
            photo_loaded: true,
            default_project: 'last',
            assigned_projects: {
              _elogin_new_personal: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
              'demo-project': {
                projectRole: CUSTOMER,
                proposedRole: CUSTOMER,
                entryType: 'INTERNAL',
              },
              last: { projectRole: MEMBER, proposedRole: MEMBER, entryType: 'INTERNAL' },
            },
          },
          {
            userId: 'autotest',
            email: 'autotest@example.com',
            full_name: 'autotest',
            account_type: 'INTERNAL',
            userRole: USER,
            last_login: 1467362347319,
            photo_loaded: true,
            default_project: 'autotest_personal',
            assigned_projects: {
              autotest_personal: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
              default_project: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'INTERNAL',
              },
              tester_personal: {
                projectRole: OPERATOR,
                proposedRole: MEMBER,
                entryType: 'PERSONAL',
              },
            },
          },
          {
            userId: 'customer-krns',
            email: 'customer-krns@yandex.by',
            full_name: 'TEST USER',
            account_type: 'INTERNAL',
            userRole: USER,
            last_login: 1500458177511,
            photo_loaded: true,
            default_project: 'gnu',
            assigned_projects: {
              'customer-krns_personal': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
              gnu: { projectRole: CUSTOMER, proposedRole: CUSTOMER, entryType: 'INTERNAL' },
              tester_personal: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'PERSONAL',
              },
            },
          },
          {
            userId: 'default',
            email: 'string000@gmale.com',
            photoId: '59c375979194be0001795d1f',
            full_name: 'tester',
            account_type: 'INTERNAL',
            userRole: USER,
            last_login: 1519033663525,
            photo_loaded: true,
            default_project: 'uservcevkjblbk_personal',
            assigned_projects: {
              11111: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              '1111_1111': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'ahml-sup': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'UPSA',
              },
              aircraft: { projectRole: MEMBER, proposedRole: MEMBER, entryType: 'INTERNAL' },
              ak_2_personal_project: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              alex_personal: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'PERSONAL',
              },
              artem: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'artem-test': {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'INTERNAL',
              },
              'bcsl-bqs': { projectRole: MEMBER, proposedRole: MEMBER, entryType: 'UPSA' },
              copy: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'ddn-repl': { projectRole: MEMBER, proposedRole: MEMBER, entryType: 'UPSA' },
              default_personal: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
              default_project: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'INTERNAL',
              },
              demo4: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              email: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'epm-pro': { projectRole: MEMBER, proposedRole: MEMBER, entryType: 'UPSA' },
              'epm-upsa': { projectRole: MEMBER, proposedRole: MEMBER, entryType: 'UPSA' },
              extra: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              flacky: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              gnu: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              grow: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              hhh_hhh: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              hhh_jjj: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              hhhh: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              import: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              jobs: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              lexecon_personal: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
              nebo_project1: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'INTERNAL',
              },
              nebo_project2: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'INTERNAL',
              },
              nebo_standart: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'INTERNAL',
              },
              'new-project': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'new-project-new': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'new-yana-project': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              newa: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              peppastar: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'pr-1': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'pr-2': { projectRole: MEMBER, proposedRole: MEMBER, entryType: 'INTERNAL' },
              'pr-custom-1': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'project-qa': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              project365: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              qwerty: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'reportportal-user_personal': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
              rp_autotest_proj: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              single_personal: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'PERSONAL',
              },
              superadmin_personal: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'PERSONAL',
              },
              tester_personal: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
              testvovan: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              trend: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              tttttttt: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              user105_personal: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              userdiaul7nhzj_personal: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'PERSONAL',
              },
              uservcevkjblbk_personal: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'PERSONAL',
              },
              'yana-test': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              yana_new_project_jjj: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              yana_project: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
            },
          },
          {
            userId: 'demo-3',
            email: 'frmp.test@gmaile.com',
            full_name: 'DME',
            account_type: 'INTERNAL',
            userRole: USER,
            last_login: 1509011649245,
            photo_loaded: true,
            default_project: 'demo-3_personal',
            assigned_projects: {
              'demo-3_personal': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
            },
          },
          {
            userId: 'mac',
            email: 'test.gmail.com@gmail.com',
            full_name: 'MaCi',
            account_type: 'INTERNAL',
            userRole: USER,
            last_login: 1496666014716,
            photo_loaded: true,
            default_project: 'gnu',
            assigned_projects: {
              gnu: { projectRole: MEMBER, proposedRole: MEMBER, entryType: 'INTERNAL' },
              mac_personal: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
            },
          },
          {
            userId: 'member-01',
            email: 'member.test@gmail.com',
            full_name: MEMBER,
            account_type: 'INTERNAL',
            userRole: USER,
            last_login: 1515768434280,
            photo_loaded: true,
            default_project: 'member-01_personal',
            assigned_projects: {
              default_project: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'INTERNAL',
              },
              'member-01_personal': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
            },
          },
          {
            userId: 'member-user1',
            email: 'test.stop@gmail.com',
            full_name: 'Member-user1',
            account_type: 'INTERNAL',
            userRole: USER,
            last_login: 1507539222051,
            photo_loaded: true,
            default_project: 'member-user1_personal',
            assigned_projects: {
              default_project: {
                projectRole: MEMBER,
                proposedRole: MEMBER,
                entryType: 'INTERNAL',
              },
              'member-user1_personal': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
            },
          },
          {
            userId: 'new-user10',
            email: 'testuser0@gmail.com',
            full_name: 'User0',
            account_type: 'INTERNAL',
            userRole: USER,
            last_login: 1475678006576,
            photo_loaded: true,
            default_project: 'new-user10_personal',
            assigned_projects: {
              'new-user10_personal': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
            },
          },
          {
            userId: 'new-user3',
            email: 'test.new.user@gmail.com',
            full_name: 'NEW-USER3',
            account_type: 'INTERNAL',
            userRole: USER,
            last_login: 1477575142558,
            photo_loaded: true,
            default_project: 'new-user3_personal',
            assigned_projects: {
              aircraft: {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'INTERNAL',
              },
              'new-user3_personal': {
                projectRole: PROJECT_MANAGER,
                proposedRole: PROJECT_MANAGER,
                entryType: 'PERSONAL',
              },
            },
          },
        ],
        page: { number: 1, size: 10, totalElements: 52, totalPages: 6 },
      });
      return (
        <InputUserSearch
          isAdmin
          projectId="superadmin_personal"
          onChange={action('Select user')}
          placeholder="Enter Login or Email"
        />
      );
    },
  );
