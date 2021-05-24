# Human Lambdas Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)

## [Unreleased]

## 0.5.6 26-06-2020

## Added
* Pretty print json in text input type

## Fixed
* Expired refresh token

## 0.5.5 19-06-2020

## Hotfix
* Fixed issue with possible undefined value in multiclass type

## 0.5.4 19-06-2020

## Changed
* Improvements to audits filtering
* Added support for single-selection
* Rebuilt the jump logic
* Minor bug fixes

## Fixed
* Field ID validation for Yup

## 0.5.2 05-06-2020

## Added
* Add support for Number Output
* Initial work on audits filtering
* Improved Segment user tracking

## Fixed
* Queue name uniqueness bug

## 0.5.1 29-05-2020
* Added support for audio types
* Add conditional support

## 0.5.0 15-05-2020

## Added
* [New Feature] Audits
* Highlight URL links in text
* Date and Number types
* Allow user to download completed tasks as CSV

## Changed
* Queue sort order
* Improved UI for ListPage tables
* Replace dropdown menus with MenuButton component
* Updated react-grid-layout

## Fixed
* New queue input type bug

## 0.4.12 04-04-2020

## Changed
* Improvements to EditLayout

## Added
* Worklow and Workers Metrics

## 0.4.11 20-04-2020

## Fixed
* Refactored invitation modules and fixed role change bug


## 0.4.9 17-04-2020

## Fixed
* Validate webhooks URL
* Fixed Sentry to work in production

## Added
* Allow admins to edit a queues data model [#135](https://github.com/Human-Lambdas/hl-web/pull/135)
* Fixed it such that users couldn't create outputs with empty options
* UX Copy improvements
* Replaced placeholder with users organization name
* Log user name and email in FullStory
* Show invited users and allow resending invitation link
* Design tweaks to make input fields more consistent

## Changed
* Replaced default menus with custom dropdown


## 0.4.6 25-03-2020

## Fixed
* Network request not made on expired token [#132](https://github.com/Human-Lambdas/hl-web/pull/132/files)
* Do not save layout on every resize event
* More API URL updates
* Updates to upload screen UI
* Fix bug that didn't allow users without queues to login

## Added
* Users can now change password in settings

## 0.4.5 18-03-2020

## Breaking Changes
* Removed trailing forward slashes from API URIs

## Fixed
* Improved layout editing
* Improvements to how we handle network errors
* Replace input ID with name as label in `TaskRenderer`
* Fixed error when no more tasks are left to be worked

## 0.4.3 03-03-2020

## Added
* Invite users to an organization
* Ability for admins to delete queues
* Ability for admins to customize queue layout
* Allow admins to change a users organizational role
* User settings; users can now update their personal details
* Ability for users to create tasks using API
* Task navigation with keyboard shortcuts

## Fixed
* Auto-deployments to Elastic Beanstalk with GitHub Actions
* Improved queue validations
* Improved queue creation UX
* Improved security with user authentication/authorization

## Changed
* UI Improvements (buttons, input fields, theme, palette)

## 0.2.2 03-12-2019

## Added
* Changelog (https://keepachangelog.com/en/1.0.0/)
* Loading component as fallback for Suspense
* Primary button component
* Improved dashboard designs
* Web service worker
* File upload to handle large datasets
* Custom hook modal

## Removed
* Previous queue container
* Papaparse json parser

## Deprecated
* use-react-modal replaced with useModal hook
