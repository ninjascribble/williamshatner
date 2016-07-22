Vagrant.configure("2") do |config|

  config.vm.box = "trusty64"
  config.vm.box_url = "http://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

  config.vm.network :forwarded_port, guest: 80, host: 8080     #nginx
  config.vm.network :forwarded_port, guest: 27017, host: 8017 #mongodb

  config.vm.synced_folder "", "/vagrant", disabled: true
  config.vm.synced_folder "", "/var/www", owner: "root", group: "root"

  config.vm.provider :virtualbox do |v|
    v.memory = 1024
    v.cpus = 2
  end

  config.vm.provision "shell", path: "./ops/setup.sh"
end
