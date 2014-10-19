#Noderiety Node 200

##IRC
\#noderiety

##Schedule

* 09:30 - Streams
* 11:00: Connect, Express & Koa
* 11:45: Lunch
* 1:15p: Mongoose
* 2:00p: Your First CRUD App
* 4:30p: Workshops: 
  * [Stream Adventure](https://github.com/substack/stream-adventure)
  * [ExpressWorks](https://github.com/azat-co/expressworks)
  * [Kick off Koa](https://github.com/koajs/kick-off-koa)
  * [Make Me Hapi](https://github.com/hapijs/makemehapi)
* 6:30p: End

##Preparation
Install [nvm](https://github.com/creationix/nvm):

```
# Mac / Linux
curl https://raw.githubusercontent.com/creationix/nvm/v0.17.2/install.sh | bash

# Windows
npm install -g n
```

Install latest:

```
# Mac / Linux
nvm install v0.11 # Current version is >= 0.11.14

# Windows
n latest
```

Or, install stable:

```
# Mac / Linux
nvm install v0.10 # Current version is >= 0.10.32

# Windows
n stable
```

Set npm install directory:

```
# Mac / Linux
mkdir ~/.npmprefix
npm config set prefix ~/.npmprefix

# Windows
# Necessary?
```

and add to PATH:

```
# Mac
echo 'export PATH=`npm config get prefix`/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile

# Linux
echo 'export PATH=`npm config get prefix`/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Windows
# Necessary?
```


##Workshops
####Assigned workshops:
1. [Express Works](https://github.com/azat-co/expressworks)
2. [Kick off Koa](https://github.com/koajs/kick-off-koa)
3. [Stream Adventure](https://github.com/substack/stream-adventure)
4. [Make Me Hapi](https://github.com/hapijs/makemehapi)

Workshops can be run in 1 of 2 ways:

####Local executable:
```
$ npm install functional-javascript-workshop # UNNECESSARY, INCLUDED IN REPO
$ ./npm_exec functional-javascript-workshop
```
####Global install and executable:
```
$ npm install functional-javascript-workshop -g
$ functional-javascript-workshop
```

##Resources
[Stream Handbook](https://github.com/substack/stream-handbook)

Other Web Frameworks:

[LoopBack](http://loopback.io/)

[Hapi](https://github.com/spumko/hapi/)

[CompoundJS](http://compoundjs.com)

[SailsJS](http://sailsjs.org)