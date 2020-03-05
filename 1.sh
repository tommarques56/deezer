#!/bin/bash
sudo yum update -y \
 && sudo yum upgrade -y \
 && sudo yum install nano -y \
 && sudo yum install gcc -y \
 && cd /root/ \
 && rm -fr /root/deezer \
 && sudo yum install -y yum-utils device-mapper-persistent-data lvm2 \
 && sudo systemctl start docker \
 && sudo docker stop $(docker ps -a -q) \
 && sudo docker rm $(docker ps -a -q) \
 && curl -s https://aerokube.com/cm/bash | bash \
 && sudo /root/cm selenoid cleanup \
 && sudo /root/cm selenoid stop \
 && sudo /root/cm selenoid-ui stop \
 && sudo /root/cm selenoid start --browsers "chrome:79.0;opera:66" --vnc --args "-limit 8 -timeout 10m0s -service-startup-timeout 15m0s" \
 && sudo /root/cm selenoid-ui start \
 && sudo sudo yum install git -y \
 && git clone https://github.com/tommarques56/deezer.git \
 && sudo chmod 777 /root/deezer \
 && cd /root/deezer \
 && yum install python3 -y \
 && pip3 install selenium \
 && pip3 install requests \
 && pip3 install fake_useragent \
 && pip3 install bs4 \
 && pip3 install lxml \
 && pip3 install python_anticaptcha \
 && pip3 install html5lib \
 && pip3 install pandas \
 && docker run -d --name=netdata \
  -p 19999:19999 \
  -v /etc/passwd:/host/etc/passwd:ro \
  -v /etc/group:/host/etc/group:ro \
  -v /proc:/host/proc:ro \
  -v /sys:/host/sys:ro \
  -v /etc/os-release:/host/etc/os-release:ro \
  --cap-add SYS_PTRACE \
  --security-opt apparmor=unconfined \
  netdata/netdata \
 && python3 lg.py \
 && clear
 
 
@reboot /root/launch.sh
0 */1 * * * reboot -f
 
 