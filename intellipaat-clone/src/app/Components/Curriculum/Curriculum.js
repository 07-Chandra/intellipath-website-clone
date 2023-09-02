"use client";
import React, { useState } from "react";

import "./Curriculum.scss";

import Interested from "@/app/SubComponents/Interested/Interested";
import Highlight from "@/app/SubComponents/Highlight/Highlight";
import Points from "@/app/SubComponents/Points/Points";
function Curriculum() {
    const [count, setCount] = useState(0);

    function checkCount(val) {
        if (val == count) {
            setCount(-1);
        } else {
            setCount(val);
        }
    }

    return (
        <div className="curriculum">
            <div className="curiculum-container">
                <div className="module-parts">
                    <div className="part1">
                        <div className="heading">
                            <span>Curriculum</span>
                        </div>
                        <div className="header">
                            <div className="head">
                                <svg
                                    className="blue"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-circle-filled"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="var(--blue-color);"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path
                                        d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                                        stroke-width="0"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <p className="para">Live Course </p>
                            </div>

                            <div className="head">
                                <svg
                                    className="green"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-circle-filled"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    fill="green"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path
                                        d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z"
                                        stroke-width="0"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <p className="para">Self Paced</p>
                            </div>

                            <div className="download-btn">
                                <button className="btn">
                                    Download Brochure
                                </button>
                            </div>
                        </div>

                        <div className="module">
                            <div className="item">
                                <div
                                    className="topic"
                                    onClick={() => checkCount(1)}
                                >
                                    <Points name=" Module 1 - Preparatory Sessions – Linux" />
                                </div>
                                {count == 1 ? (
                                    <div className="discription">
                                        <p>
                                            <span>Linux</span>
                                        </p>
                                        <ul className="list">
                                            <li className="list-item">
                                                <span>
                                                    {" "}
                                                    Introduction to Linux –
                                                </span>
                                                Establishing the fundamental
                                                knowledge of how linux works and
                                                how you can begin with Linux OS.{" "}
                                            </li>
                                            <li className="list-item">
                                                <span> Linux Basics –</span>{" "}
                                                File Handling, data extraction,
                                                etc.
                                            </li>
                                            <li className="list-item">
                                                <span>
                                                    {" "}
                                                    Hands-on Sessions And
                                                    Assignments for Practice –
                                                </span>
                                                Strategically curated problem
                                            </li>
                                            <li className="list-item ">
                                                statements for you to start with
                                                Linux.{" "}
                                            </li>
                                        </ul>
                                        <p className="broch-btn">
                                            Download Brochure
                                        </p>
                                    </div>
                                ) : (
                                    " "
                                )}
                            </div>
                            <div className="item">
                                <div
                                    className="topic"
                                    onClick={() => checkCount(2)}
                                >
                                    <Points name="Module 2 - Amazon Web Services" />
                                </div>
                                {count == 2 ? (
                                    <div className="discription">
                                        <div class="card-body card-body-vk-ip card-body-2345678910">
                                            <ol>
                                                <li>
                                                    <strong>
                                                        {" "}
                                                        Introduction to Cloud
                                                        Computing &amp; AWS
                                                    </strong>
                                                </li>
                                            </ol>
                                            <ul>
                                                <li>What is Cloud Computing</li>
                                                <li>
                                                    Cloud Service &amp;
                                                    Deployment Models
                                                </li>
                                                <li>
                                                    How AWS is the leader in the
                                                    cloud domain
                                                </li>
                                                <li>
                                                    Various cloud computing
                                                    products offered by AWS
                                                </li>
                                                <li>
                                                    Introduction to AWS S, EC,
                                                    VPC, EBS, ELB, AMI
                                                </li>
                                                <li>
                                                    AWS architecture and the AWS
                                                    Management Console,
                                                    virtualization in AWS (Xen
                                                    hypervisor)
                                                </li>
                                                <li>What is auto-scaling</li>
                                                <li>
                                                    AWS EC best practices and
                                                    cost involved.
                                                </li>
                                            </ul>
                                            <ol start="2">
                                                <li>
                                                    <strong>
                                                        {" "}
                                                        Elastic Compute and
                                                        Storage Volumes&nbsp;
                                                    </strong>
                                                </li>
                                            </ol>
                                            <ul>
                                                <li>Introduction to EC</li>
                                                <li>
                                                    Regions &amp; Availability
                                                    Zones(AZs)
                                                </li>
                                                <li>
                                                    Pre-EC, EC instance types
                                                </li>
                                                <li>
                                                    Comparing Public IP and
                                                    Elastic IP
                                                </li>
                                                <li>
                                                    Demonstrating how to launch
                                                    an AWS EC instance
                                                </li>
                                                <li>
                                                    Introduction to AMIs,
                                                    Creating and Copying an AMI
                                                </li>
                                                <li>Introduction to EBS</li>
                                                <li>EBS volume types</li>
                                                <li>EBS Snapshots</li>
                                                <li>Introduction to EFS</li>
                                                <li>
                                                    Instance tenancy- Reserved
                                                    and Spot instances
                                                </li>
                                                <li>
                                                    Pricing and Design Patterns.
                                                </li>
                                            </ul>
                                            <ol start="3">
                                                <li>
                                                    <strong>
                                                        {" "}
                                                        Load Balancing,
                                                        Autoscaling and
                                                        DNS&nbsp;
                                                    </strong>
                                                </li>
                                            </ol>
                                            <ul>
                                                <li>
                                                    Introduction to Elastic Load
                                                    Balancer
                                                </li>
                                                <li>
                                                    Types of ELB – Classic,
                                                    Network and Application
                                                </li>
                                                <li>
                                                    Load balancer architecture
                                                </li>
                                                <li>
                                                    Cross-zone load balancing
                                                </li>
                                                <li>
                                                    Introduction to Auto
                                                    Scaling, vertical and
                                                    horizontal scaling, the
                                                    lifecycle of Auto Scaling
                                                </li>
                                                <li>
                                                    Components of Auto Scaling,
                                                    scaling options and policy,
                                                    instance termination
                                                </li>
                                                <li>
                                                    Using load balancer with
                                                    Auto Scaling
                                                </li>
                                                <li>
                                                    Pre-Route – how DNS works
                                                </li>
                                                <li>
                                                    Routing policy, Route
                                                    terminologies, Pricing
                                                </li>
                                            </ul>
                                            <ol start="4">
                                                <li>
                                                    <strong>
                                                        {" "}
                                                        Virtual Private Cloud
                                                    </strong>
                                                </li>
                                            </ol>
                                            <ul>
                                                <li>What is Amazon VPC,</li>
                                                <li>
                                                    VPC as a networking layer
                                                    for EC,
                                                </li>
                                                <li>
                                                    IP address and CIDR
                                                    notations,
                                                </li>
                                                <li>
                                                    Components of VPC – network
                                                    interfaces, route tables,
                                                    internet gateway, NAT,
                                                </li>
                                                <li>
                                                    Security in VPC – security
                                                    groups and NACL, types of
                                                    VPC, what is a subnet, VPC
                                                    peering with scenarios, VPC
                                                    endpoints, VPC pricing and
                                                    design patterns
                                                </li>
                                            </ul>
                                            <ol start="5">
                                                <li>
                                                    <strong>
                                                        {" "}
                                                        Storage – Simple Storage
                                                        Service (S)
                                                    </strong>
                                                </li>
                                            </ol>
                                            <ul>
                                                <li>
                                                    Introduction to AWS storage
                                                </li>
                                                <li>
                                                    Pre-S – online cloud storage
                                                </li>
                                                <li>
                                                    API, S consistency models
                                                </li>
                                                <li>
                                                    Storage hierarchy, buckets
                                                    in S
                                                </li>
                                                <li>
                                                    Objects in S, metadata and
                                                    storage classes, object
                                                    versioning, object lifecycle
                                                    management, cross-region
                                                    replication, data
                                                    encryption, connecting using
                                                    VPC endpoint, S pricing.
                                                </li>
                                            </ul>
                                            <ol start="6">
                                                <li>
                                                    <strong>
                                                        {" "}
                                                        Databases and In-Memory
                                                        DataStores
                                                    </strong>
                                                </li>
                                            </ol>
                                            <ul>
                                                <li>
                                                    What is a database, types of
                                                    databases, databases on AWS
                                                </li>
                                                <li>
                                                    Introduction to Amazon RDS
                                                </li>
                                                <li>
                                                    Multi-AZ deployments,
                                                    features of RDS
                                                </li>
                                                <li>
                                                    Read replicas in RDS,
                                                    reserved DB instance
                                                </li>
                                                <li>
                                                    RDS pricing and design
                                                    patterns
                                                </li>
                                                <li>
                                                    Introduction to Amazon
                                                    Aurora, benefits of Aurora,
                                                    Aurora pricing and design
                                                    patterns
                                                </li>
                                                <li>
                                                    Introduction to DynamoDB,
                                                    components of DynamoDB,
                                                    DynamoDB pricing and design
                                                    patterns
                                                </li>
                                                <li>
                                                    What is Amazon Redshift,
                                                    advantages of Redshift
                                                </li>
                                                <li>
                                                    What is ElastiCache, why
                                                    ElastiCache.
                                                </li>
                                            </ul>
                                            <ol start="7">
                                                <li>
                                                    <strong>
                                                        {" "}
                                                        Management and
                                                        Application
                                                        Services&nbsp;
                                                    </strong>
                                                </li>
                                            </ol>
                                            <ul>
                                                <li>
                                                    Introduction to
                                                    CloudFormation
                                                </li>
                                                <li>
                                                    CloudFormation components
                                                </li>
                                                <li>
                                                    CloudFormation templates
                                                </li>
                                                <li>
                                                    The concept of
                                                    Infrastructure-as-a-code
                                                </li>
                                                <li>
                                                    Functions and pseudo
                                                    parameters
                                                </li>
                                                <li>
                                                    Introduction to Simple
                                                    Notification Service, how
                                                    does SNS work
                                                </li>
                                                <li>
                                                    Introduction to Simple Email
                                                    Service, how does SES work
                                                </li>
                                                <li>
                                                    Introduction to Simple Queue
                                                    Service, how does SQS work.
                                                </li>
                                            </ul>
                                            <ol start="8">
                                                <li>
                                                    <strong>
                                                        {" "}
                                                        Access Management and
                                                        Monitoring
                                                        Services&nbsp;
                                                    </strong>
                                                </li>
                                            </ol>
                                            <ul>
                                                <li>
                                                    Pre-IAM, why access
                                                    management
                                                </li>
                                                <li>
                                                    Amazon Resource Name (ARN),
                                                    IAM features
                                                </li>
                                                <li>
                                                    Multi-factor authentication
                                                    (MFA) in IAM, JSON
                                                </li>
                                                <li>
                                                    IAM policies, IAM
                                                    permissions, IAM roles,
                                                    identity federation, pricing
                                                </li>
                                                <li>
                                                    Introduction to CloudWatch,
                                                    metrics and namespaces,
                                                    CloudWatch architecture,
                                                    dashboards in CW
                                                </li>
                                                <li>
                                                    CloudWatch alarms,
                                                    CloudWatch logs, pricing and
                                                    design patterns
                                                </li>
                                                <li>
                                                    Introduction to CloudTrail,
                                                    tracking API usage.
                                                </li>
                                            </ul>
                                            <ol start="9">
                                                <li>
                                                    <strong>
                                                        {" "}
                                                        Automation and
                                                        Configuration
                                                        management&nbsp;
                                                    </strong>
                                                </li>
                                            </ol>
                                            <ul>
                                                <li>What is AWS Lambda</li>
                                                <li>
                                                    How Lambda is different from
                                                    EC
                                                </li>
                                                <li>
                                                    Benefits and limitations of
                                                    Lambda
                                                </li>
                                                <li>How does Lambda work</li>
                                                <li>
                                                    Use cases of Lambda, Lambda
                                                    concepts
                                                </li>
                                                <li>
                                                    Integration S with Lambda
                                                </li>
                                                <li>
                                                    What is Elastic Beanstalk,
                                                    how does Beanstalk work,
                                                    Beanstalk concepts,
                                                    Beanstalk pricing
                                                </li>
                                                <li>
                                                    What is configuration
                                                    management
                                                </li>
                                                <li>
                                                    What is AWS OpsWorks, AWS
                                                    OpsWorks benefits
                                                </li>
                                                <li>
                                                    CloudFormation vs OpsWorks,
                                                    services in OpsWorks
                                                </li>
                                                <li>
                                                    AWS OpsWorks Stacks,
                                                    OpsWorks pricing.
                                                </li>
                                            </ul>
                                            <ol start="10">
                                                <li>
                                                    <strong>
                                                        {" "}
                                                        AWS Migration&nbsp;
                                                    </strong>
                                                </li>
                                            </ol>
                                            <ul>
                                                <li>What is Cloud migration</li>
                                                <li>
                                                    Why migration is important
                                                </li>
                                                <li>
                                                    Migration process in AWS,
                                                    the R’s migration strategy
                                                </li>
                                                <li>
                                                    Virtual machine migration,
                                                    migrating a local vm onto
                                                    the AWS cloud
                                                </li>
                                                <li>
                                                    Migrating databases using
                                                    Database Migration Service
                                                    (DMS)
                                                </li>
                                                <li>
                                                    Migrating a local database
                                                    to RDS
                                                </li>
                                                <li>
                                                    Migrating an on-premises
                                                    database server to RDS using
                                                    DMS, other migration
                                                    services.
                                                </li>
                                            </ul>
                                            <p className="broch-btn">
                                                Download Brochure
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="item">
                                <div
                                    className="topic"
                                    onClick={() => checkCount(3)}
                                >
                                    <Points name=" Module 3 - Data Virtualization" />
                                </div>

                                {count == 3 ? (
                                    <div className="discription">
                                        <ul>
                                            <li>What is Virtualization?</li>
                                            <li>
                                                Virtualization is not a new
                                                concept. Evolution of
                                                Virtualization.
                                            </li>
                                            <li>Type of Virtualization</li>
                                            <li>Server-based Virtualization</li>
                                            <li>
                                                Hypervisor-based Virtualization
                                            </li>
                                            <li>Type 1 v/s Type 2</li>
                                            <li>Full v/s Para</li>
                                            <li>Virtual machine lifecycle</li>
                                            <li>
                                                Virtual machine image:
                                                Structure, formats
                                            </li>
                                            <li>
                                                Virtual machine instance: Public
                                                cloud specific instance,
                                                allocating resources to
                                            </li>
                                            <li>
                                                virtual machine instance,
                                                networking in virtual machine,
                                                Amazon Machine Instance
                                            </li>
                                            <li>VM Application</li>
                                            <li>
                                                Container Based Virtualization
                                            </li>
                                            <li>Container lifecycle</li>
                                            <li>
                                                Container image : Structure,
                                                formats
                                            </li>
                                            <li>
                                                Container instance: Allocating
                                                resources to container instance
                                            </li>
                                            <li>Networking in containers</li>
                                            <li>
                                                Unikernels: Structure, formats,
                                                allocation, networking in
                                                Unikernels
                                            </li>
                                            <li>
                                                Difference between VM,
                                                Containers and Unikernels
                                            </li>
                                            <li>
                                                Network Function Virtualization
                                                (NFV)
                                            </li>
                                        </ul>
                                        <p className="broch-btn">
                                            Download Brochure
                                        </p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="item">
                                <div
                                    className="topics"
                                    onClick={() => checkCount(4)}
                                >
                                    <Points name="Module 4 - Migration and Fault Tolerance" />
                                </div>

                                {count == 4 ? (
                                    <div className="discription">
                                        <ul>
                                            <li>
                                                Broad Aspects of Migration into
                                                Cloud
                                            </li>
                                            <li>
                                                Migration of virtual Machines
                                                and techniques
                                            </li>
                                            <li>Fault Tolerance Mechanisms</li>
                                        </ul>

                                        <p className="broch-btn">
                                            Download Brochure
                                        </p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>

                            <div className="item">
                                <div
                                    className="topics"
                                    onClick={() => checkCount(5)}
                                >
                                    <Points name=" Module 5 - DevOps" />
                                </div>
                                {count == 5 ? (
                                    <div className="discription">
                                        <ul>
                                            <li>
                                                <strong>
                                                    Infrastructure Setup
                                                </strong>
                                                <ul>
                                                    <li>
                                                        Lab setup-AWS Account
                                                        creation
                                                    </li>
                                                    <li>
                                                        EC2 and LMS Walkthrough
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>
                                                    Introduction to DevOps
                                                </strong>
                                                <ul>
                                                    <li>
                                                        What is Software
                                                        Development?
                                                    </li>
                                                    <li>
                                                        Software Development
                                                        Life Cycle
                                                    </li>
                                                    <li>
                                                        Traditional Models for
                                                        SDLC
                                                    </li>
                                                    <li>Why DevOps?</li>
                                                    <li>What is DevOps?</li>
                                                    <li>DevOps Lifecycle</li>
                                                    <li>DevOps Tools</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>
                                                    Version Control with Git
                                                </strong>
                                                <ul>
                                                    <li>
                                                        What is Version Control?
                                                    </li>
                                                    <li>
                                                        Types of Version Control
                                                        Systems
                                                    </li>
                                                    <li>Introduction to SVN</li>
                                                    <li>Introduction to Git</li>
                                                    <li>Git Lifecycle</li>
                                                    <li>Common Git Commands</li>
                                                    <li>
                                                        Working with Branches in
                                                        Git
                                                    </li>
                                                    <li>Merging Branches</li>
                                                    <li>
                                                        Resolving Merge
                                                        Conflicts
                                                    </li>
                                                    <li>Git Workflow</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>Hands-on Exercise –</strong>
                                        </p>
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>
                                                        Git Life cycle Commands
                                                    </li>
                                                    <li>
                                                        Pushing Code to GitHub
                                                    </li>
                                                    <li>
                                                        Stashing Code in Git
                                                    </li>
                                                    <li>
                                                        Creating, Deleting Git
                                                        Branches
                                                    </li>
                                                    <li>
                                                        Reverting a Push to
                                                        GitHub
                                                    </li>
                                                    <li>
                                                        Merging branches using
                                                        git merge
                                                    </li>
                                                    <li>
                                                        Merging branches using
                                                        git rebase
                                                    </li>
                                                    <li>
                                                        Resolving merge
                                                        conflicts using the git
                                                        merge tool
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>
                                                    Containerization Using
                                                    Docker
                                                </strong>
                                                <ul>
                                                    <li>
                                                        Understanding Docker
                                                        Lifecycle
                                                    </li>
                                                    <li>
                                                        Components of the Docker
                                                        Ecosystem
                                                    </li>
                                                    <li>
                                                        Common Docker Operations
                                                    </li>
                                                    <li>
                                                        Creating a DockerHub
                                                        Account
                                                    </li>
                                                    <li>
                                                        Committing Changes in a
                                                        Container
                                                    </li>
                                                    <li>
                                                        Pushing a Container
                                                        Image to DockerHub
                                                    </li>
                                                    <li>
                                                        Creating Custom Docker
                                                        Images using Dockerfile
                                                    </li>
                                                    <li>
                                                        What are Docker Volumes?
                                                    </li>
                                                    <li>
                                                        Deploying a Multi-tier
                                                        Application Using Docker
                                                        Network
                                                    </li>
                                                    <li>
                                                        Using Docker Compose to
                                                        Deploy Containers
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>Hands-on Exercise</strong> –
                                        </p>
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>
                                                        Common Docker Operations
                                                    </li>
                                                    <li>
                                                        Creating a DockerHub
                                                        Account
                                                    </li>
                                                    <li>
                                                        Committing Changes to a
                                                        Container
                                                    </li>
                                                    <li>
                                                        Pushing container to
                                                        DockerHub
                                                    </li>
                                                    <li>
                                                        Creating a Local Image
                                                        Repository
                                                    </li>
                                                    <li>
                                                        Building an Image using
                                                        Dockerfile
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>
                                                    Configuration Management
                                                    using Puppet
                                                </strong>
                                                <ul>
                                                    <li>
                                                        Need for Configuration
                                                        Management
                                                    </li>
                                                    <li>
                                                        Configuration Management
                                                        Tools
                                                    </li>
                                                    <li>What is Puppet?</li>
                                                    <li>Puppet Architecture</li>
                                                    <li>
                                                        Setting up Master Slave
                                                        using Puppet
                                                    </li>
                                                    <li>Puppet Manifests</li>
                                                    <li>Puppet Modules</li>
                                                    <li>
                                                        Applying Configuration
                                                        using Puppet
                                                    </li>
                                                    <li>Puppet File Server</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>Hands-on Exercise</strong> –
                                        </p>
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>
                                                        Setting up Master-Slave
                                                        on AWS
                                                    </li>
                                                    <li>
                                                        Testing the Connection
                                                        of nodes with Puppet
                                                    </li>
                                                    <li>Creating a Manifest</li>
                                                    <li>
                                                        Deploying Manifest on
                                                        Node
                                                    </li>
                                                    <li>Creating a Module</li>
                                                    <li>
                                                        Deploying sample
                                                        software on nodes using
                                                        Puppet Modules and
                                                        Manifests
                                                    </li>
                                                    <li>
                                                        Implementing a File
                                                        Server Module on Puppet
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>
                                                    Configuration Management
                                                    using Ansible
                                                </strong>
                                                <ul>
                                                    <li>What is Ansible?</li>
                                                    <li>Ansible vs Puppet</li>
                                                    <li>
                                                        Ansible Architecture
                                                    </li>
                                                    <li>
                                                        Setting up Master Slave
                                                        using Ansible
                                                    </li>
                                                    <li>Ansible Playbook</li>
                                                    <li>Ansible Roles</li>
                                                    <li>
                                                        Applying configuration
                                                        using Ansible
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>Hands-on Exercise</strong> –
                                        </p>
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>
                                                        Installing Ansible on
                                                        AWS
                                                    </li>
                                                    <li>
                                                        Creating a Playbook
                                                        using YAML
                                                    </li>
                                                    <li>
                                                        Creating an Ansible Role
                                                    </li>
                                                    <li>
                                                        Using Roles in Playbook
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>
                                                    Continuous Integration with
                                                    Jenkins
                                                </strong>
                                                <ul>
                                                    <li>
                                                        Introduction to
                                                        Continuous Integration
                                                    </li>
                                                    <li>
                                                        Jenkins Master-Slave
                                                        Architecture
                                                    </li>
                                                    <li>
                                                        Understanding CI/CD
                                                        Pipelines
                                                    </li>
                                                    <li>
                                                        Creating an end-to-end
                                                        automated CI/CD Pipeline
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>Hands-on Exercise</strong> –
                                        </p>
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>
                                                        Creating a Jenkins
                                                        Master Slave on AWS
                                                    </li>
                                                    <li>
                                                        Installing Plug-ins in
                                                        Jenkins
                                                    </li>
                                                    <li>
                                                        Creating Jenkins Builds
                                                    </li>
                                                    <li>
                                                        Creating Scheduled
                                                        Builds
                                                    </li>
                                                    <li>
                                                        Triggering Jobs using
                                                        Git Webhooks
                                                    </li>
                                                    <li>
                                                        Using the Pipeline
                                                        Plugin in Jenkins
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>
                                                    Continuous Orchestration
                                                    Using Kubernetes
                                                </strong>
                                                <ul>
                                                    <li>
                                                        Introduction to
                                                        Kubernetes
                                                    </li>
                                                    <li>
                                                        Docker Swarm vs
                                                        Kubernetes
                                                    </li>
                                                    <li>
                                                        Kubernetes Architecture
                                                    </li>
                                                    <li>
                                                        Deploying Kubernetes
                                                        using Kubeadms
                                                    </li>
                                                    <li>
                                                        Alternate Ways of
                                                        Deploying Kubernetes
                                                    </li>
                                                    <li>YAML Files</li>
                                                    <li>
                                                        Creating a Deployment in
                                                        Kubernetes using YAML
                                                    </li>
                                                    <li>
                                                        Services in Kubernetes
                                                    </li>
                                                    <li>
                                                        Ingress in Kubernetes
                                                    </li>
                                                    <li>What are Volumes</li>
                                                    <li>Types of Volumes</li>
                                                    <li>Persistent Volumes</li>
                                                    <li>
                                                        Introduction to Secrets
                                                    </li>
                                                    <li>
                                                        Kubernetes Monitoring
                                                        using Kubernetes
                                                        Dashboard
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>Hands-on Exercise</strong> –
                                        </p>
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>
                                                        Setting up Kubernetes
                                                        using Kubeadm
                                                    </li>
                                                    <li>
                                                        Installing Kubernetes
                                                        using kOps and GCK
                                                    </li>
                                                    <li>
                                                        Creating a Deployment
                                                    </li>
                                                    <li>Creating Services</li>
                                                    <li>Creating an Ingress</li>
                                                    <li>
                                                        Demonstrating the use of
                                                        Ingress, services, and
                                                        deployments together
                                                    </li>
                                                    <li>Creating Volumes</li>
                                                    <li>
                                                        Creating Persistent
                                                        Volumes
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>
                                                    Continuous Monitoring using
                                                    ELK
                                                </strong>
                                                <ul>
                                                    <li>Agenda</li>
                                                    <li>What is ELK?</li>
                                                    <li>Components of ELK</li>
                                                    <li>ELK Flow</li>
                                                    <li>Features of ELK</li>
                                                    <li>ELK Installation</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>
                                                Hands-on Exercise&nbsp; –
                                            </strong>
                                        </p>
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>
                                                        Analyzing Apache Logs
                                                        with Logstash and Kibana
                                                    </li>
                                                    <li>
                                                        Analyzing .csv logs with
                                                        Logstash and Kibana
                                                    </li>
                                                    <li>
                                                        Analyzing Real-Time Web
                                                        Logs with Beats and
                                                        Kibana
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <strong>
                                                    Terraform Modules and
                                                    Workspaces
                                                </strong>
                                                <ul>
                                                    <li>
                                                        What is Infrastructure
                                                        as a code
                                                    </li>
                                                    <li>
                                                        Infrastructure as Code
                                                        (IaC) vs Configuration
                                                        Management (CM)
                                                    </li>
                                                    <li>
                                                        Introduction to
                                                        Terraform
                                                    </li>
                                                    <li>
                                                        Installing Terraform on
                                                        AWS
                                                    </li>
                                                    <li>
                                                        Basic Operations in
                                                        Terraform: init, plan,
                                                        apply, destroy
                                                    </li>
                                                    <li>
                                                        Terraform Code Basics
                                                    </li>
                                                    <li>
                                                        Deploying an end-to-end
                                                        architecture on AWS
                                                        using Terraform
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>Hands-on Exercise</strong> –
                                        </p>
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>
                                                        Installing Terraform
                                                    </li>
                                                    <li>
                                                        Initializing AWS
                                                        Terraform Provider
                                                    </li>
                                                    <li>
                                                        Creating an EC2 instance
                                                        using Terraform
                                                    </li>
                                                    <li>
                                                        Updating changes to EC2
                                                        using Terraform
                                                    </li>
                                                    <li>
                                                        Destroying EC2 using
                                                        Terraform
                                                    </li>
                                                    <li>
                                                        Deploying EC2 inside a
                                                        custom VPC using
                                                        Terraform
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <p className="broch-btn">
                                            Download Brochure
                                        </p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="item">
                                <div
                                    className="topics"
                                    onClick={() => checkCount(6)}
                                >
                                    <Points name="Module 6 – Parallel Computing and Distributed Computing" />
                                </div>
                                {count == 6 ? (
                                    <div className="discription">
                                        <p>
                                            <strong>Parallel Computing:</strong>
                                        </p>
                                        <ul>
                                            <li>
                                                Motivating Factor: Human Brain,
                                                The Need And Feasibility of
                                                Parallel Computing
                                            </li>
                                            <li>Moore’s Law</li>
                                            <li>
                                                Elements of Parallel Computing:
                                                Factors affecting parallel
                                                system performance, Parallel
                                                Programming Models,
                                            </li>
                                            <li>
                                                Computational Power Improvement,
                                                Two Eras of Computing, Hardware
                                                architectures for parallel
                                                processing, Dependency Analysis
                                                &amp; Conditions of Parallelism,
                                                Levels of Software Parallelism
                                                in Program Execution, Software
                                                Parallelism Types, Performance
                                                of Parallel Algorithms,
                                            </li>
                                            <li>
                                                Laws of cautions, The Goal of
                                                Parallel Processing, Amdahl’s
                                                Law, Gustafson’s Law,
                                                Communication Cost Model.
                                                Demonstration for parallel
                                                application performance and its
                                                impacts
                                            </li>
                                        </ul>
                                        <p>
                                            <strong>
                                                Distributed Computing:
                                            </strong>
                                        </p>
                                        <ul>
                                            <li>
                                                Distributed computing system,
                                                Characteristics, Goals,
                                                Components of a distributed
                                                system
                                            </li>
                                            <li>
                                                Architectural styles for
                                                distributed computing: Software
                                                architectural styles, System
                                                architectural styles,
                                                Client-server, peer to peer,
                                                Parallel vs Distributed Systems,
                                                RPC.
                                            </li>
                                        </ul>

                                        <p className="broch-btn">
                                            Download Brochure
                                        </p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="item">
                                <div
                                    className="topics"
                                    onClick={() => checkCount(7)}
                                >
                                    <Points name="Module 7 - AWS DevOps" />
                                </div>
                                {count == 7 ? (
                                    <div className="discription">
                                        <ul>
                                            <li>
                                                Continuous Monitoring using
                                                Prometheus
                                            </li>
                                            <li>
                                                Prometheus Security and Use
                                                Cases
                                            </li>
                                            <li>
                                                Log Server and alerting in
                                                Nagios
                                            </li>
                                            <li>
                                                Software Lifecycle automation
                                                using AWS
                                            </li>
                                            <li>
                                                Automating Infrastructure using
                                                CloudFormation
                                            </li>
                                            <li>
                                                Application Deployment using
                                                Elastic Beanstalk
                                            </li>
                                        </ul>

                                        <p className="broch-btn">
                                            Download Brochure
                                        </p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>

                        <div className="heading">
                            <span>Elective</span>
                        </div>
                        <div className="module card">
                            <div className="item">
                                <div
                                    className="topics"
                                    onClick={() => checkCount(8)}
                                >
                                    <Points name="Module 8 - Advanced Kubernetes" />
                                </div>
                                {count == 8 ? (
                                    <div className="discription">
                                        <ol>
                                            <li>
                                                <strong>
                                                    {" "}
                                                    Application Design and Build
                                                </strong>
                                            </li>
                                        </ol>
                                        <ul>
                                            <li>
                                                Define, build and modify
                                                container images
                                            </li>
                                            <li>
                                                Understand Jobs and CronJobs
                                            </li>
                                            <li>
                                                Understand multi-container Pod
                                                design patterns (e.g. sidecar,
                                                init and others)
                                            </li>
                                            <li>
                                                Utilize persistent and ephemeral
                                                volumes
                                            </li>
                                        </ul>
                                        <ol start="2">
                                            <li>
                                                <strong>
                                                    {" "}
                                                    Application Deployment
                                                </strong>
                                            </li>
                                        </ol>
                                        <ul>
                                            <li>
                                                Define, build and modify
                                                container images
                                            </li>
                                            <li>
                                                Define, create and monitor the
                                                application
                                            </li>
                                            <li>
                                                Creating and Exposing
                                                applications using the
                                                Kubernetes Manifest Blocks
                                            </li>
                                            <li>
                                                Managing applications deployed
                                                in Pods
                                            </li>
                                        </ul>
                                        <ol start="3">
                                            <li>
                                                <strong>
                                                    {" "}
                                                    Application observability
                                                    and maintenance
                                                </strong>
                                            </li>
                                        </ol>
                                        <ul>
                                            <li>Understand API deprecations</li>
                                            <li>
                                                Implement probes and health
                                                checks
                                            </li>
                                            <li>
                                                Use provided tools to monitor
                                                Kubernetes applications
                                            </li>
                                            <li>Utilize container logs</li>
                                            <li>Debugging in Kubernetes</li>
                                        </ul>
                                        <ol start="4">
                                            <li>
                                                <strong>
                                                    {" "}
                                                    Application Environment,
                                                    Configuration and Security
                                                </strong>
                                            </li>
                                        </ol>
                                        <ul>
                                            <li>
                                                Discover and use resources that
                                                extend Kubernetes (CRD)
                                            </li>
                                            <li>
                                                Understand authentication,
                                                authorization and admission
                                                control
                                            </li>
                                            <li>
                                                Understanding and defining
                                                resource requirements, limits
                                                and quotas
                                            </li>
                                            <li>Understand ConfigMaps</li>
                                            <li>
                                                Create &amp; consume Secrets
                                            </li>
                                            <li>Understand ServiceAccounts</li>
                                            <li>Understand SecurityContexts</li>
                                        </ul>

                                        <p className="broch-btn">
                                            Download Brochure
                                        </p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="item">
                                <div
                                    className="topics"
                                    onClick={() => checkCount(9)}
                                >
                                    <Points name="Module 9 - Advanced Terraform" />
                                </div>
                                {count == 9 ? (
                                    <div className="discription">
                                        <ol>
                                            <li>
                                                <strong>
                                                    {" "}
                                                    Introduction to Terraform
                                                </strong>
                                            </li>
                                        </ol>
                                        <ul>
                                            <li>
                                                Fundamentals of IAC
                                                (Infrastructure-as-Code)
                                            </li>
                                            <li>
                                                Overview of DevOps SDLC Stack
                                            </li>
                                            <li>
                                                Infrastructure Provisioning
                                                Tools – Terraform and its
                                                Benefits
                                            </li>
                                        </ul>
                                        <ol start="2">
                                            <li>
                                                <strong>
                                                    {" "}
                                                    Terraform Installation
                                                </strong>
                                            </li>
                                        </ol>
                                        <ul>
                                            <li>Installation of Terraform</li>
                                            <li>Plugin-based Architecture</li>
                                            <li>Terraform Multiple Provider</li>
                                        </ul>
                                        <ol start="3">
                                            <li>
                                                <strong>
                                                    {" "}
                                                    Terraform Configuration
                                                    Management
                                                </strong>
                                            </li>
                                        </ol>
                                        <ul>
                                            <li>
                                                HCL (HashiCorp Configuration
                                                Language)\
                                            </li>
                                            <li>Configuring Files</li>
                                            <li>Building Code</li>
                                            <li>Variables</li>
                                            <li>Terraform Data Types</li>
                                            <li>Structural</li>
                                        </ul>

                                        <p className="broch-btn">
                                            Download Brochure
                                        </p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="item">
                                <div
                                    className="topics"
                                    onClick={() => checkCount(10)}
                                >
                                    <Points name="Module 10 - Docker" />
                                </div>
                                {count == 10 ? (
                                    <div className="discription">
                                        <ul>
                                            <li>Introduction to Docker</li>
                                            <li>Storing Data in Docker</li>
                                            <li>Docker Compose</li>
                                            <li>Container Orchestration</li>
                                            <li>Networking in Docker</li>
                                            <li>Docker Monitoring</li>
                                            <li>Introduction to Kubernetes</li>
                                            <li>Kubernetes Architecture</li>
                                            <li>
                                                Introduction to Pods and
                                                Services
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="item">
                                <div
                                    className="topics"
                                    onClick={() => checkCount(11)}
                                >
                                    <Points name="Module 11 - Python" />
                                </div>
                                {count == 11 ? (
                                    <div className="discription">
                                        <ul>
                                            <li>
                                                <strong>
                                                    Introduction to Python and
                                                    IDEs
                                                </strong>{" "}
                                                – The basics of the python
                                                programming language, how you
                                                can use various IDEs for python
                                                development like Jupyter,
                                                Pycharm, etc.
                                            </li>
                                            <li>
                                                <strong>Python Basics</strong> –
                                                Variables, Data Types, Loops,
                                                Conditional Statements,
                                                functions, decorators, lambda
                                                functions, file handling,
                                                exception handling ,etc.
                                            </li>
                                            <li>
                                                <strong>
                                                    Object Oriented Programming
                                                </strong>{" "}
                                                – Introduction to OOPs concepts
                                                like classes, objects,
                                                inheritance, abstraction,
                                                polymorphism, encapsulation,
                                                etc.
                                            </li>
                                            <li>
                                                <strong>
                                                    Hands-on Sessions And
                                                    Assignments for Practice
                                                </strong>{" "}
                                                – The culmination of all the
                                                above concepts with real-world
                                                problem statements for better
                                                understanding.
                                            </li>
                                        </ul>

                                        <p className="broch-btn">
                                            Download Brochure
                                        </p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="item">
                                <div
                                    className="topics"
                                    onClick={() => checkCount(12)}
                                >
                                    <Points name="Module 12 - Azure DevOps" />
                                </div>
                                {count == 12 ? (
                                    <div className="discription">
                                        <ul>
                                            <li>
                                                Introduction to Microsoft Azure
                                            </li>
                                            <li>
                                                Introduction to ARM &amp; Azure
                                                Storage
                                            </li>
                                            <li>
                                                Introduction to Azure storage
                                            </li>
                                            <li>Azure Virtual Machines</li>
                                            <li>
                                                Azure App and Container services
                                            </li>
                                            <li>Azure Networking – I</li>
                                            <li>Azure Networking – II</li>
                                            <li>
                                                Authentication and Authorization
                                                in Azure using RBAC
                                            </li>
                                            <li>
                                                Microsoft Azure Active Directory
                                            </li>
                                            <li>Azure Monitoring</li>
                                            <li>Infrastructure Setup</li>
                                            <li>Introduction to DevOps</li>
                                            <li>Continuous Testing</li>
                                            <li>
                                                Continuous Integration using
                                                Jenkins
                                            </li>
                                            <li>Software Version Control</li>
                                            <li>
                                                Continuous Deployment:
                                                Containerization with Docker
                                            </li>
                                            <li>
                                                Containerization with Docker:
                                                Ecosystem and Networking
                                            </li>
                                            <li>
                                                Configuration Management using
                                                Ansible
                                            </li>
                                            <li>
                                                Continuous Orchestration using
                                                Kubernetes
                                            </li>
                                            <li>
                                                Terraform Modules &amp;
                                                Workspaces
                                            </li>
                                            <li>
                                                Azure DevOps and Azure Repos
                                            </li>
                                            <li>
                                                Azure Artifacts and Azure Test
                                                Plans
                                            </li>
                                            <li>Azure Pipelines</li>
                                            <li>Azure Boards</li>
                                            <li>Terraform with Azure</li>
                                        </ul>
                                        <p>
                                            <strong>Self Paced</strong>
                                        </p>
                                        <ul>
                                            <li>MAVEN</li>
                                            <li>SONARQUBE</li>
                                            <li>XLDEPLOY</li>
                                            <li>TEAMCITY</li>
                                            <li>JFROG</li>
                                            <li>MS BUILD</li>
                                            <li>NEXUS</li>
                                            <li>NPM</li>
                                            <li>ELK</li>
                                        </ul>

                                        <p className="broch-btn">
                                            Download Brochure
                                        </p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>

                        <div className="desclaimer">
                            <h3>Desclaimer</h3>
                            <p className="desc">
                                {" "}
                                Intellipaat reserves the right to modify, amend
                                or change the structure of module &amp; the
                                curriculum, after due consensus with the
                                university/certification partner.
                            </p>
                        </div>
                    </div>

                    <div className="part2">
                        <Highlight />
                    </div>
                </div>
                <div className="interested-program">
                    <Interested />
                </div>
            </div>
        </div>
    );
}

export default Curriculum;
