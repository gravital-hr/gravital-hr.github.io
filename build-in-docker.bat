
  docker run -it --rm     --workdir /srv/jekyll     --volume="%cd%:/srv/jekyll"  --volume="%cd%/vendor/bundle:/usr/local/bundle"     --publish 4000:4000     --publish 4001:4001     jekyll/builder:pages     ./build-in-docker.sh build
