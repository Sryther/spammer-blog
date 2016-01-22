// Call this script like the following : casperjs index.js http://domain.com/somearticle/

var casper = require('casper').create();
var yourWebsite = 'http://framokcheesecake.tumblr.com';

if (casper.cli.args.length === 0 && Object.keys(casper.cli.options).length === 0) {
    casper.echo("No arg nor option passed").exit();
}

var createFakeComment = function() {
    return {
        comment: 'Super ! Et en passant, joli design.',
        url: yourWebsite,
        author: 'Paul Eric',
        email: 'paul.eric@airbus.com'
    };
};

var form = createFakeComment();
var url = casper.cli.args;
// En espérant que pour toi ça marche, car moi non :(
casper.start(url, function() {
    this.fill('form#commentform', form, true);
}).then(function() {
    // Nothing here
}).run(function() {
    return casper.exit(0);
});
