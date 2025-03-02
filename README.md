# [Build] 🌀

`Build` is a powerful tool that compiles all your `TypeScript` files into
`JavaScript`, leveraging the speed of `ESBuild` and the type-checking
capabilities of the `TypeScript` compiler.

## Feature 📦

- Fast compilation using `ESBuild`
- `TypeScript` support with type-checking
- Watch mode for development
- Customizable `ESBuild` configuration
- Supports both `CommonJS` and `ES` modules

## Installation 🚀

Install the package as a development dependency:

```sh
npm install -D -E @playform/build
```

## 🛠️ Usage

### Command Line

Run the build tool from the command line:

```sh
npx @playform/build 'Source/**/*.ts'
```

### CLI Options

```
Usage: Build [options] <File...>

Arguments:
  File                      📝 File patterns to build

Options:
  -V, --version             Output the version number
  -ES, --ESBuild <File>     📜 Custom `ESBuild` configuration file
  -TS, --TypeScript <File>  📜 Custom `TypeScript` configuration file (default: "tsconfig.json")
  -W, --Watch               👁️ Watch mode: rebuild on file changes
  -h, --help                Display help information
```

### NPM Scripts

Add `Build` to your `package.json` scripts:

```json
{
	"scripts": {
		"Build": "Build 'Source/**/*.ts'",
		"Run": "Build 'Source/**/*.ts' --Watch",
		"prepublishOnly": "Build 'Source/**/*.ts'"
	}
}
```

## ⚙️ Configuration

### ESBuild Configuration 📜

Create a custom `ESBuild` configuration file (e.g., `ESBuild.ts`):

```javascript
export default {
	minify: true,
	sourcemap: true,
	// Add other esbuild options here
};
```

Use the custom configuration:

```sh
npx @playform/build 'Source/**/*.ts' --ESBuild ESBuild.ts
```

See an example of a configuration file in
[`ESBuild.ts`](Source/Variable/ESBuild.ts)

### TypeScript Configuration 📜

Create a `tsconfig.json` file in your project root:

```json
{
	"compilerOptions": {
		"outDir": "Target",
		"rootDir": "Source",
		"strict": true
	},
	"extends": "@playform/build/tsconfig",
	"include": ["Source"]
}
```

### JSConfig Configuration  📜(optional)

For `JavaScript` projects using `JSDoc` comments, create a `jsconfig.json`:

```json
{
	"compilerOptions": {
		"outDir": "Target",
		"rootDir": "Source",
		"checkJs": true
	},
	"extends": "@playform/build/jsconfig",
	"include": ["Source"]
}
```

## Contributing 🤝

Contributions are welcome! Please see [`CONTRIBUTING.md`](CONTRIBUTING.md) for
guidelines and feel free to submit a Pull Request.

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md) for a history of changes to this component.

[ESBuild]: HTTPS://NPMJS.Org/esbuild
[TypeDoc]: HTTPS://NPMJS.Org/typedoc
[Build]: HTTPS://NPMJS.Org/@playform/build
