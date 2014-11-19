#WDI Installfest (Mac)

Please check your OS X version before beginning. (Click the Apple menu and choose *About this Mac*.) This set of steps should work for Mavericks or Yosemite; if you're on another version, let an instructor know.



##XCode Command Line Tools

In Terminal:

`xcode-select --install`

Find an instructor for support if you have any errors!

##Homebrew

###Install Homebrew

In Terminal:

`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`


###Brew Doctor
`brew doctor`

- See what the Doctor says.  You may need to edit your ~/.bash_profile or make other adjustments. If you're not sure how to handle the output, flag down an instructor!

**Rule of thumb:** Don't type any commands starting with 'sudo' unless an instructor okays it :)


##rbenv & Ruby

###Install RBENV

In Terminal:

`brew update`

then, we'll use brew to install rbenv:

`brew install rbenv rbenv-gem-rehash ruby-build`

then, we'll enable shims and autocompletion:

`echo 'eval "$(rbenv init -)"' >> ~/.bash_profile`

then, we'll make sure your $PATH has access to the rbenv command-line utility:

`echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile`

then, reload your bash profile:

`source ~/.bash_profile`



###Install Ruby 2.1.3

Curious whether you've got Ruby installed already? Type `ruby -v` in Terminal to find out.


In Terminal:

`rbenv install 2.1.3`

This will take a while. Don't panic if it's more than 5 minutes and it looks like nothing has happened.

###Set Ruby 2.1.3 as the Default

In Terminal:

`rbenv global 2.1.3`


###Rehash to install shims

In Terminal:

`rbenv rehash`


##Rails

###Install Rails 4.1.7 & rehash

In Terminal: 

`gem install rails --version=4.1.7 --no-ri --no-rdoc`

###Update paths

In Terminal:

`sudo nano /etc/paths`

Enter your password. Now, we will add the path where Homebrew installs software. It is important that files here are executed before the default software installed with your Mac. So, add a line to the top of the file:

`/usr/local/bin`

Press Control-X to exit. Press Y when prompted with saving.

###Double-check your Ruby & Rails versions

In Terminal:

`ruby -v`

then 

`rails -v`

You should have Ruby 2.1.3 and Rails 4.1.7. 

If you don't, please find an instructor!


##Install Git, MongoDB, PostgreSQL, and ImageMagick

In Terminal, install the distributed version control system Git:

`brew install git`

Install the databases MongoDB and PostgreSQL:

`brew install mongodb postgresql`

Install the image processing library ImageMagick (used with Paperclip later on):

`brew install imagemagick`


##Update git config information

In Terminal:

`git config --global user.name "Your Name"`

then, using the same email you used to sign up with Github,

`git config --global user.email youremail@whatever.com`

then

`git config --global credential.helper cache`


##node.js

Download the [Macintosh Installer](http://nodejs.org/dist/v0.10.33/node-v0.10.33.pkg). Run the installer using the defaults.


##Sublime Text 3

+ **Download and install [Sublime Text 3](http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%20Build%203065.dmg).** After running the downloaded file, a Finder window will open. Inside this window, drag the Sublime Text icon into the Applications folder.

+ **Add Sublime Text to your dock.** Press Command-Space to open Spotlight. Type Sublime, then drag the Sublime Text icon to the dock at the bottom of your screen. This allows you to easily open Sublime Text.

+ **Set up the subl command line tool.** In Terminal:

	`ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl`

	To ensure it works, in Terminal:
	
	`subl --help` 

##Optional

+ **Install [Mou](http://25.io/mou/download/Mou.zip).** Mou allows you to edit and view Markdown files.

+ **Install XCode.** Press Command-Space to open Spotlight. Type App Store, then select the App Store from the list. Now, search for XCode and install it. **NOTE:** The install file is very large and will take a long time to download.
