## 0.1.9

### Changed

- Updated version to 0.1.9
- Updated email in package.json from "Source/Open@PlayForm.Cloud" to
  "Source/Open@PlayForm.LTD"
- Updated URL in package.json from "HTTPS://PlayForm.Cloud" to
  "HTTPS://PlayForm.LTD"
- Updated @types/node from version 22.7.7 to 22.9.0

## 0.1.8

### Changed

- Updated dependencies.
- Migrated from `deepmerge-ts`'s `deepmergeCustom` to a custom merge function
  for more control.
- Improved the merging logic for `entryPoints` in the
  [ESBuild](https://esbuild.github.io/api/#plugins) configuration to prevent
  unwanted array flattening.

## 0.1.7

### Changed

- Updated dependencies.
- Simplified documentation folder structure.

## 0.1.6

### Changed

- Simplified build process to improve performance.
- Updated dependencies.

## 0.1.5

### Changed

- Updated @types/node to version 22.5.4
- Improved build process to include CSS files.
- Enhanced file path handling in the build process using path module functions.
- Updated dependencies:
    - esbuild
    - ts-node

### Added

- Added the ability to exclude files/folders from the build process.
- Added `ignore` option to the Build interface.

## 0.1.4

### Changed

- Updated `@types/node` to version 22.5.0
- Updated `esbuild` to version 0.23.1
- Updated `typescript` to version 5.5.4
- Reverted `ts-node` to version 10.9.2
- Improved file path handling in the build process.

### Added

- Added `experimentalDecorators` option to tsconfig.json

## 0.1.3

### Changed

- Updated version to 0.1.3
- Updated dependencies:
    - @types/node from 20.14.12 to 22.0.2
- Minor code formatting changes

### Added

- Added `provenance: true` to publishConfig in package.json
- Added `access: public` to publishConfig in package.json

## 0.1.2

### Changed

- Updated version to 0.1.2
- Updated dependencies:
    - @types/node to 20.14.12
    - deepmerge-ts to 7.1.0
    - typescript to "\*" (latest)
- Updated devDependencies:
    - ts-node to 11.0.0-beta.1
- Improved error handling in Exec function

### Added

- Added `provenance: true` to publishConfig in package.json

## 0.1.1

### Changed

- Updated version to 0.1.1
- Updated "Run" script to include "--Watch" option instead of "-W"

## 0.1.0

### Changed

- Updated version to 0.1.0
- Updated dependencies
- Modified Build function to support watch mode
- Updated TypeScript configuration
- Updated command-line interface with clearer descriptions.
- Expanded README.md with detailed usage instructions and examples.

### Added

- Added Watch option to Build command

### Removed

- Removed peerDependencies

## 0.0.11

### Changed

- Updated dependencies

## 0.0.10

### Changed

- Removed Document script
- Updated dependencies

## 0.0.9

### Changed

- Updated version to 0.0.9
- Updated package.json metadata
- Updated dependencies
- Modified package.json structure

### Added

- Added peerDependencies
- Added peerDependenciesMeta for optional dependencies

## 0.0.8

### Changed

- Updated version to 0.0.8
- Updated package description and keywords
- Updated homepage and repository URLs
- Updated repository and author information
- Updated dependencies
- Improved command-line interface descriptions.

## 0.0.7

### Changed

- Updated version to 0.0.7
- Updated repository URLs to use HTTPS

## 0.0.6

### Changed

- Updated version to 0.0.6
- Updated package description
- Updated author information
- Updated dependencies
- Removed @playform/document from devDependencies

## 0.0.5

### Changed

- Updated version to 0.0.5
- Updated package.json scripts

### Added

- Added @playform/document as a peer dependency

## 0.0.4

### Changed

- Updated version to 0.0.4 (corrected from 0.0.5 in the summary)
- Added "Document" script
- Updated peerDependencies
- Minor code formatting changes

## 0.0.3

### Changed

- Updated version to 0.0.3
- Updated dependencies
- Modified Build function to incorporate `tsc-alias`.
- Set `logLevel` in ESBuild configuration to "debug" for enhanced debugging.

### Added

- Added `tsc-alias` to dependencies

## 0.0.2

### Changed

- Major refactoring and restructuring of the project.
- Updated package name to "@playform/build".
- Updated version to 0.0.2.
- Updated package description, keywords, and metadata.
- Updated dependencies.
- Modified source files structure and content.
- Changed main and types file paths.
- Updated scripts in package.json.
- Simplified configuration by integrating `TypeScript.json` settings into
  `tsconfig.json`.
- Removed `esbuild-plugin-copy`.

### Added

- Added new source files and interfaces.

### Removed

- Removed several old source files and configurations.
- Removed `TypeScriptESBuild.ts` and shifted core logic to `Build.ts`.

## 0.0.1

### Added

- Initial release
