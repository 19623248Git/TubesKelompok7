const express = require('express');
const router = express.Router();
const Post = require('./models/Post');

// Routes
router.get('/', async (req, res) => {
    layout: false
    try {
        const data = await Post.find();
        res.render('Home', {data});
    } catch (error) {
        console.log(error)
    }
}

)

// GETTING POSTS
/**
 * GET /
 * Post :id
 */
router.get('/post/:id', async (req, res) => {
    layout: false
    try {
        let slug = req.params.id;
        const data = await Post.findById({_id: slug});
        res.render('Article', {data});
    } catch (error) {
        console.log(error)
    }
}

)

// SEARCH FUNCTION
/**
 * POST /
 * Post - searchTerms
 */
router.post('/search', async (req, res) => {
    layout: false
    try {
        const locals = {
            title: "Search",
        }

        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "")

        const data = await Post.find({
            $or: [
                {title: {$regex: new RegExp(searchNoSpecialChar, 'i')}},
                {description: {$regex: new RegExp(searchNoSpecialChar, 'i')}},
            ]
        });
        res.render("Search",{
            data,
            locals
        });
    } catch (error) {
        console.log(error)
    }
}

)

module.exports = router;

// inserting initial data to database
/* function insertPostData () {
    Post.insertMany([
        {
            title: "TCP/IP",
            description: "Transmission Control Protocol/Internet Protocol is the basic communication language or protocol of the Internet. It can also be used as a communications protocol in a private network (either an intranet or an extranet)."
        },
        {
            title: "Ethernet",
            description: "Ethernet is a family of computer networking technologies commonly used in local area networks (LAN), metropolitan area networks (MAN), and wide area networks (WAN). It defines wiring and signaling for the physical layer, and frame formats and protocols for the media access control (MAC)/data link layer of the OSI model."
        },
        {
            title: "DNS",
            description: "The Domain Name System (DNS) is a hierarchical and decentralized naming system for computers, services, or other resources connected to the Internet or a private network. It translates domain names meaningful to humans into the numerical identifiers associated with networking equipment for the purpose of locating and addressing these devices worldwide."
        },
        {

            title: "Router",
            description: "A router is a networking device that forwards data packets between computer networks. Routers perform the traffic directing functions on the Internet. A data packet is typically forwarded from one router to another through the networks that constitute an internetwork (e.g., the Internet) until it reaches its destination node."
        },
        {
            title: "Firewall",
            description: "A firewall is a network security device that monitors and filters incoming and outgoing network traffic based on an organization's previously established security policies. Firewalls are often categorized as either network firewalls or host-based firewalls. Network firewalls filter traffic between two or more networks, while host-based firewalls filter traffic between an individual device and a network."
        },
        {
            title: "IPv4",
            description: "Internet Protocol version 4 (IPv4) is the fourth version of the Internet Protocol (IP). It is one of the core protocols of standards-based internetworking methods in the Internet and other packet-switched networks. IPv4 uses a 32-bit address scheme allowing for a total of 2^32 addresses (just over 4 billion addresses)."
        },
        {
            title: "IPv6",
            description: "Internet Protocol version 6 (IPv6) is the most recent version of the Internet Protocol (IP), the communications protocol that provides an identification and location system for computers on networks and routes traffic across the Internet. IPv6 was developed to deal with the long-anticipated problem of IPv4 address exhaustion."
        },
        {
            title: "Subnetting",
            description: "Subnetting is the practice of dividing a network into two or more smaller networks. It involves the allocation of a portion of the host's address space for use in the creation of separate networks. Subnetting is commonly used to improve network performance, security, and efficiency."
        },
        {
            title: "VPN",
            description: "A Virtual Private Network (VPN) extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network. Applications running across a VPN may therefore benefit from the functionality, security, and management of the private network."
        },
        {
            title: "Load Balancer",
            description: "A load balancer is a device or software application that distributes network or application traffic across multiple servers. Load balancers are used to enhance the reliability and scalability of applications by ensuring that no single server bears too much demand."
        },
        {
            title: "TCP",
            description: "Transmission Control Protocol (TCP) is one of the main protocols of the Internet Protocol Suite. It operates at the transport layer and facilitates reliable, ordered, and error-checked delivery of data between applications running on hosts communicating via an IP network."
        },
        {
            title: "UDP",
            description: "User Datagram Protocol (UDP) is one of the core members of the Internet Protocol Suite. With UDP, computer applications can send messages, in this case referred to as datagrams, to other hosts on an Internet Protocol (IP) network without prior communications to set up special transmission channels or data paths."
        },
        {
            title: "LAN",
            description: "A local area network (LAN) is a computer network that interconnects computers within a limited area such as a residence, school, laboratory, university campus, or office building. By contrast, a wide area network (WAN) not only covers a larger geographic distance, but also generally involves leased telecommunication circuits."
        },
        {
            title: "WAN",
            description: "A wide area network (WAN) is a telecommunications network that extends over a large geographic area for the primary purpose of computer networking. Wide area networks are often established with leased telecommunication circuits."
        },
        {
            title: "ARP",
            description: "Address Resolution Protocol (ARP) is a communication protocol used for discovering the link layer address, such as a MAC address, associated with a given internet layer address, typically an IPv4 address. This mapping is a critical function in the Internet Protocol suite."
        },
        {
            title: "DHCP",
            description: "Dynamic Host Configuration Protocol (DHCP) is a network management protocol used on Internet Protocol (IP) networks, whereby a DHCP server dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks."
        }
    ])
}
insertPostData(); */