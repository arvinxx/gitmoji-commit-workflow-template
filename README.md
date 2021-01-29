# Gitmoji Commit Workflow Template

[![Gitmoji][gitmoji]][gitmoji-url] [![semantic-release][semantic-release]][semantic-release-repo] ![][license-url]

[![Release CI][release-ci]][deploy-ci-url]

<!-- badge -->

[gitmoji]: https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg
[gitmoji-url]: https://gitmoji.carloscuesta.me/
[semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-repo]: https://github.com/semantic-release/semantic-release
[license-url]: https://img.shields.io/github/license/arvinxx/gitmoji-commit-workflow-template

<!-- Github CI -->

[release-ci]: https://github.com/arvinxx/gitmoji-commit-workflow-template/workflows/Release%20CI/badge.svg
[deploy-ci-url]: https://github.com/arvinxx/gitmoji-commit-workflow-template/actions?query=workflow%3A%22Release+CI%22

## 模板说明

### 主分支

版本号: [![NPM version][version-image]][version-url]

master 分支作为随时可发布分支,对应 npm 包相应的版本

### alpha 分支

版本号: [![NPM version][alpha-version-image]][version-url]

alpha 版本一般为内部预览版

### beta 分支

版本号: [![NPM version][beta-version-image]][version-url]

beta 版本一般为外部预览版 即常说的公测版本

### next 分支

版本号: [![NPM version][next-version-image]][version-url]

next 分支会抢占主分支版本号, 因此默认情况下需要带上 `.rc` 后缀

在 next 分支下任何 `feat` 和 `fix` 都只会增加 `.rc.x` 位数,不会增加前面位次的版本号

当合并到 master 分支时, 将会自动发布当前版本号的正式版本

## License

[MIT](./LICENSE) ® Arvin Xu

[version-image]: http://img.shields.io/npm/v/@gitmoji/template.svg?color=deepgreen&label=latest
[next-version-image]: https://img.shields.io/npm/v/@gitmoji/template/next?color=deepgreen&label=next
[alpha-version-image]: https://img.shields.io/npm/v/@gitmoji/template/alpha?color=deepgreen&label=alpha
[beta-version-image]: https://img.shields.io/npm/v/@gitmoji/template/beta?color=deepgreen&label=beta
[version-url]: http://npmjs.org/package/@gitmoji/template
