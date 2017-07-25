=====
CartoDB
=====

This module extends the DKAN Datastore to provide CartoDB integration.

When enabled the "Datastore" functionality is completely offloaded to CartoDB.

Files are uploaded to DKAN and posted to CartodB and stored as tables.

The CartoDB SQL API is made available for querying instead of the native DKAN Datastore API.

Installation

This module requires the CartoDB PHP library. It should be downloaded and placed in sites/all/libraries. The cartodb.class.php file should be located at sites/all/libraries/cartodbclient-php/cartodb.class.php

You can also use the dkan_datastore_cartodb.make file: drush make --no-core dkan_datastore_cartodb.make

See the Drupal documentation for general instructions on installing modules. Once the module is enabled, go to /admin/dkan/cartodb. Here you will enter your CartoDB credentials:

DKAN CartoDB Admin Settings form

Once you’ve saved your credentials you should see “Successfully connected to CartoDB.”

Publishing maps with CartoDB and DKAN

This module takes resources in DKAN and makes them editable in CartoDB. The resulting visualizations can be displayed as previews for DKAN resources as well as to tell stories about your data elsewhere on your DKAN site.

CartoDB’s visualizations are built on a powerful SQL API. Once resources are added to CartoDB, their contents can also be queried. This allows users to make applications from your data.

Add a resource

Next, add a resource with a file attached to it:

Adding a Resource

Once the resource has been uploaded, click “Manage Datastore”:

Manage Datastore

Click “Import” to start the process:
