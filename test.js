'use strict';

var args=require("args");
args.option('greet', 'greetings to say');
args.option ('friend', 'friend to say hello to');

var flags =args.parse(process.argv);
var greetings =flags.greet|| 'hello';
var friend =flags.friend || 'test';

console.log('\n\t%s %s!', greetings, friend);

//var friend =process.argv[2];
//console.log('hello !', friend);
