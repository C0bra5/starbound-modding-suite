module.exports = {
  activate() {
    require('atom-package-deps').install('starbound-modding-suite')
      .then(function() {
        console.log('All dependencies installed, good to go')
      })
  }
}