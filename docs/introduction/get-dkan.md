# Get DKAN

DKAN is open source and flexible: You can download it for free and run it on your own server or choose from one of our hosting partners below.

## Download and run DKAN on your server

DKAN is based on the open source </a><a href="http://drupal.org">Drupal</a> content and application framework and runs almost anywhere Drupal is supported.  Users unfamiliar with Drupal may be more comfortable trying one of the hosted options listed below, or contacting us to obtain a private demonstration instance. There is extensive information on how to install DKAN on your own in the [the developers/installation](/dkan-documentation/dkan-developers/installation) section of this site.

## Hosting Partners

DKAN is open source and flexible: you can download it for free and run it on your own server (see [installation instructions](installation.rst)) or choose from one of our hosting partners below.

### Acquia

**[Click here](https://insight.acquia.com/free?distro=dkantestdrive)**  to install DKAN on Acquia for free.

[Acquia](http://acquia.com) offers a number of [hosting tools](http://www.acquia.com/products-services/acquia-cloud#Overview) built specifically for best maintaining Drupal sites. These include integrations with 3rd party systems like New Relic and Blaze Meter as well as reports on module updates, performance, and security reviews. Most importantly, Acquia offers a dashboard that makes it easy to move code (hosted by git), media files, and the database between development, testing, and production environments:

![Acquia Dashboard screenshot](../images/acquia-dashboard.png)

These tools allow a single site builder or team of developers to follow best practices, scale up if needed, and follow a rigorous QA process all without ever touching a server.

#### Single-click Installation

Acquia offers a "single-click" installation of DKAN. While this is labelled as a "Test drive," the environment offers the same dashboard tools as a full, paid account. [Visit Acquia's website for complete instructions](https://docs.acquia.com/cloud/free/aws-testdrive/dkan).

#### Maintaining a DKAN Site on Acquia

Updates to DKAN are released frequently. Acquia will not push these updates to your instance automatically, but you can keep your codebase up-to-date using your own workflow, or following our general [Upgrade Instructions](../development/maintaining.md).

### Pantheon

**[Click here](https://dashboard.getpantheon.com/products/dkan/spinup)**  to install DKAN on Pantheon for free.

#### Why Pantheon?

Pantheon is the fastest and easiest to maintain way to get up and running with DKAN. Once you’ve setup an account you can launch your DKAN portal for as little as $25 per month.

Pantheon provides reliable Drupal cloud hosting with a powerful development tools and web-based user interface designed to facilitate and encourage best development practices. With essentially a single click, you can spin up a new DKAN instance on Pantheon and log in to your new site in just a few minutes.

### Automated DKAN updates

DKAN updates are sent right to your development site. You test them safely with no risk. Updates can be merged without coding or using a command line (after initial setup).

This image shows the Pantheon dashboard where new updates are applied: ![dkan-update](https://cloud.githubusercontent.com/assets/512243/23308560/96fda7da-fa79-11e6-9c75-10a1df088f76.PNG)

### No-coding or Devops necessary

Pantheon takes care of all your hosting needs including backups, dev/test/prod instances, CLI access if you need it. DKAN supplies updates to your site. You can leverage all of the power of DKAN without code and without setting up or deploying servers.

## Prerequisites

### 1. Knowledge of Git, command line tools, and developer tools

While anyone could follow the step by step instructions below it is helpful to have experience with git, cli tools, and developer tools and practices.

### 2. Create free Pantheon Account

[Create your free Pantheon account](https://pantheon.io/) to get started.

### 3. Install drush locally

[Install drush](http://docs.drush.org/en/master/install/) to your local computer or server.

### 4. Add your ssh key to your Pantheon account

[Add your ssh key](https://pantheon.io/docs/ssh-keys/) to your Pantheon account.

### 5. Install Terminus (recommended)

It is recommended to [install Terminus](https://github.com/pantheon-systems/terminus#installation), Pantheon’s CLI tool.

## Step by Step Process

### 1. Create DKAN site on Pantheon

[Create your DKAN site](https://dashboard.getpantheon.com/products/dkan/spinup) using this form. This should only take several minutes.

Add your site name and url:

![dkan-pantheon-1](https://cloud.githubusercontent.com/assets/512243/23308400/03d040a8-fa79-11e6-8176-4d6beac38eec.PNG)

### 2. Update your drush alias files

Once your site is created you need to update your local drush alias files.

#### 2a) Download your drush alias files

Visit your [Pantheon Dashboard](https://dashboard.pantheon.io) and click “Drush Aliases”.

![dkan-pantheon-3](https://cloud.githubusercontent.com/assets/512243/23308529/7a8cb12c-fa79-11e6-91f8-f0a1854c6099.PNG)

#### 2b) Update your aliases using Terminus (recommended)

##### Authenticate with Terminus

    > terminus auth:login

If you are doing this for the first time you will need to generate a machine token. Just follow the link provided.

#### Update drush aliases

    > terminus aliases

With either method you should be able to type:

    > drush sa

see a list of aliases including .dev/.test/.prod instances of your site.

### 3. Change “Connection Mode” to SFTP

Go to your dev instance in Pantheon and click “SFTP”. This is to get around a bug in Pantheon that won’t let you install from the CLI while in Git mode.

### 4. Install DKAN

Run the installation command:

    > drush si @mysitealias.dev dkan -vy

If you want to specify a root user or password you can add “–account-name” and “–account-pass” arguments. If you don’t specify the password you will have to look for it in the CLI output.

The installation process should take about 10 minutes.

### 5. Log in to your new DKAN site!

Visit the url on your development instance dashboard in Pantheon or type

    > drush @mysitealias.dev uli

## Follow-up Steps

### 1. Switch “Connection Mode” back to git

Go back to your dev instance and switch “Connection mode” back to git.

### 2. Move your database and code from dev to test and prod

See “Deploy to test and live” in [Pantheon docs](https://pantheon.io/docs/get-started/)

### 3. Start adding to your DKAN site

Visit the [DKAN Docs](http://docs.getdkan.com/en/latest/index.html) to see how to setup your site.

### 4. Prepare for launch!

See Pantheon docs on [Going live](https://pantheon.io/docs/going-live).

### 5. Visit our slack channel

Visit us at [our slack channel](https://dkansignup.herokuapp.com) and say hello, ask questions, or join the community.

You can register for a free account [here](https://www.getpantheon.com/). Once you have access, create a new site:

![Pantheon new site form](../images/pantheon-new-site.png)

Choose to make a new site from scratch, and to use the DKAN distribution:

![DKAN distribution link](../images/pantheon-install-button.png)

Pantheon will then build your new based site on the latest DKAN release. You will go through a normal Drupal install process, explained in detail in the [installation instructions](../installation.md).

#### Managing updates

Pantheon uses a modified version of Drupal Pressflow, which is [publicly available on GitHub](https://github.com/pantheon-systems/drops-7). Whenever a new version of the DKAN distribution is released, the changes are merged into a version of DKAN special-built for Pantheon, [also available on GitHub](https://github.com/NuCivic/dkan-drops-7).

However, Pantheon provides an easy way to update your instance of DKAN (or any Drupal distribution hosted with them). Each time the DKAN's Pantheon build is updated, an alert will appear in your Pantheon dashboard:

![Pulling in upstream changes via UI](../images/pantheon-updates.png)

Usually, you will be able to use the "Apply Updates" button to merge those "upstream" changes directly into your copy of the codebase, alongside any changes you have already made to it. If you are developing locally using git, the next time you pull from your Pantheon repository, you'll receive the DKAN updates locally as well.

If you have modified any of the files included with DKAN, merging in upstream changes may produce conflicts. Pantheon's dashboard provides instructions for how to do the merge locally, to give you more control over resolving potential conflicts.

#### Troubleshooting

An error like the following is often seen at the end of the install process on Pantheon:

![An AJAX HTTP error occurred. HTTP Result Code: 502 Debugging information follows...](../images/pantheon-error.png)

This will hopefully be fixed on future releases. However, the resulting site should still be fully installed and functional.
