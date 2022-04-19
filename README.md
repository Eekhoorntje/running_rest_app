# running_rest_app
Store and analyze running data

# prereqs
* Local mysql
* npm
* node


# Commands to run on first checkout
* npm i express
* npm i mysql2

# Dockerized
* docker-compose up

#TODO List
* Add Mysql database table for Garmin Activity data
* Build post logic for Garmin CSV
* Add DNS entry setup
* Build local app to transform CSV to JSON for posting
** Convert to python / other script type app to upload
* validate data in database
** Add merge / whatever stuff to make re-uploading easier
* Start writing react app to visualize data 
* Add docker app to system service
