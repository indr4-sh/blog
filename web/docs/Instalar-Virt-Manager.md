---
tags:
  - vm
---
---

Se tiene que instalar QEMU y libvirt

En Arch

```bash
sudo pacman -S virt-manager qemu-full libvirt dnsmasq iptables-nft bridge-utils
```

En Ubuntu

```bash
sudo apt update
sudo apt install -y virt-manager qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils
```