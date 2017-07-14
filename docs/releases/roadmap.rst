Roadmap
=======

This is a speculative roadmap of potential future DKAN releases. These are subject to change at any time! You can be a part of the conversation shaping this roadmap; visit `getdkan.com <http://getdkan.com>`_ to see how.

1.14: Focus on visualizations and harvesting
--------------------------------------------

* Long-awaited fixes to the Visualization Entity Charts form to improve the visualization creation experience.
* Support for tab-delineated (TSV) files in previews and datastore imports.
* Support for external identifiers or DOIs for datasets, in addition to internally-generated UUIDs
* Removal of the "Data Dashboard" content type, which no provides no functionality not already provided by the Page and Data Story types.
* Inclusion of `Administration Views <https://www.drupal.org/project/admin_views>`_ module to give Site Managers and Administrators more powerful content management screens.
* Fixes for the currently-buggy behavior of the "data extent" field and widget on datasets.
* Improved support for custom license types (possibly replacing current system with Drupal taxonomy)
* Better stability for the Harvester, and improvements such as applying topics to all imported datasets on a source,

1.15: Collections and multilingual support
------------------------------------------

* Add *collections* -- groupings of datasets under a parent dataset -- to DKAN. See explanations at `Project Open Data <https://project-open-data.cio.gov/v1.1/collections/>`_ (USA) and `Joinup/DCAT-AP <https://joinup.ec.europa.eu/node/150348>`_ (EU), and `an example implementation at data.gov <https://catalog.data.gov/dataset/national-new-court-cases-data-collection>`_.
* Start deprecating the feeds-based datastore importer in favor of the "fast" importer. Better support for datastore functionality via the API.
* Out-of-box support for multilingual sites.

1.16: A new datastore
---------------------
* Re-engineered datastore with separate database from DKAN, full SQL API, multi-format outputs.
* Add *metadata source* documents -- attatched documents that provide complex metadata -- to DKAN. See the `initial prototype module <https://github.com/NuCivic/dkan_dataset_metadata_source>`_ and an exmaple implementation at `data.gov <https://catalog.data.gov/dataset/north-american-industry-classification-system-naics>`_.
