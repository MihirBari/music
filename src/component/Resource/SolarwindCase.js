import React from "react";
import { Detail } from "./Deatil";

export const SolarwindCase = () => {
  const projects = [
    {
      id: 1,
      caption:
        "Mass firmware upgrade activity for a bank customer for RBI compliance",
      Summary: "Firmware upgrade activities for their branch devices ",
      BreifSummary: `During the beginning of the lockdown, the customer reported that they had to perform mass level firmware upgrade activities for their branch devices (7000+ Cisco Devices). This activity was to be completed within a set timeframe and due to lockdown, physical visit to branches was impossible. `,
      Resolution: `Solarwinds NCM has a feature called firmware upgrades. Using that, and without any physical presence of any engineer on site, the bank customer successfully upgraded 7000+ devices in a staggered manner within 1 month.`,
      Tag: "NCM, Bank",
    },
    {
      id: 2,
      caption: "Identifying expensive queries on the database",
      Summary: `Poor performance on the MSSQL database server and during each CPU peak`,
      BreifSummary: `The customer reported poor performance on the MSSQL database server and during each CPU peak, wanted to know the details of queries hogging the resources.
         `,
      Resolution: `Using Server & Application Monitoring (SAM) module’s AppInsight for SQL template, which polls for most expensive queries by CPU time. In a customized alert, we put the condition to send the details of the most expensive queries in mail whenever there was a peak in CPU utilization.`,
      Tag: "SAM, SQL,ITeS, Oracle ",
    },
    {
      id: 3,
      caption: "Identifying poorly created queries in an in-house application",
      Summary: "Performance issues of an in-house application",
      BreifSummary: `The users in a large IT company used to regularly complain for performance issues of an in-house application.`,
      Resolution: `Using Solarwinds DPA, we worked with the developers of the in-house application, to identify long running queries, most expensive queries, queries that caused deadlocks, blocks, queries with highest wait times, table tuning advisories, index recommendations, etc. All these inputs highly helped the developers to fine tune and highly improve the application performance. `,
      Tag: "DPA, SQL",
    },
    {
      id: 4,
      caption:
        "Requirements for highly customized dashboards for CXOs, L1/L2/L3 Engineers, Application Teams and Engineers, etc.",
      Summary: "Highly customizable dashboards for various teams and levels.",
      BreifSummary: `At all our customer environments, we have met with requirements for highly customizable dashboards for various teams and levels.`,
      Resolution: `We have created L1/L2/L3 dashboards catering individually to Network/Server/DB/Storage teams which contain more granular data pertaining to their devices and CXO dashboards with a high-level overview of their environment to provide overall performance status, health & infrastructure visibility.
            `,
      Tag: "NPM, SRM, SAM, DB",
    },
    {
      id: 5,
      caption: "Identifying reasons behind poor application performance",
      Summary: "unable to troubleshoot the issues faced in application stack",
      BreifSummary: `Customer brought a case where they were unable to troubleshoot the issues faced in application stack for which their customers complained of poor performance.`,
      Resolution: `The first step was to create NPM’s NetPath and WPM from remote locations for checking service availability and website performance. It was observed that the website often gave out connection reset error,  after which the whole ongoing transaction was lost.
    Next, we put the database under DPA monitoring, but even the database performance did not give out any issues and database reported back relatively normal.
    For the next step in troubleshooting, we monitored all the services and processes related to the complete application stack and the database servers as well. Here, using the SAM application dependency feature, it was observed that there was a very high amount of packet loss between the application and the database layer servers. 
    To confirm this, we created customized templates, which constantly checked for a few parameters between the application and DB servers, such as ping, traceroute, and port connectivity. It was identified that the connectivity between the servers broke a lot during the whole day, and using the Perfstack feature, it was identified that those times coincide with the times when the website gave out connection reset error. 
    Alongside, in the Perfstack, we also observed that there was very high resource utilization on the host server as well, and coincidentally, there were spikes in the host utilization which occurred around the same time as website reset errors.
    The customer took the decision to move the complete setup to physical hardware. The platform was still under the same rigorous monitoring after movement to the physical setup, and no issues were reported after that. The errors from the customer side stopped, and the connection reset error vanished.
    .`,
      Tag: "NPM, SAM, WPA, DB, Server",
    },
    {
      id: 6,
      caption: "Identifying website slowness causes using WPM",
      Summary: "The website took a lot of time to load. ",
      BreifSummary: `The customers accessing the main website of a global call center always complained that the website took a lot of time to load. The team underwent a rigorous check on the database side, on the application server, and still wasn't able to determine the cause behind the same.`,
      Resolution: `The customer brought this concern to us during implementation phase. We created a website transaction and put it under monitoring from various locations. Upon checking the TCP waterfall chart, it was found that the image used on the website was very large in size, hence always took time to load. 
    On changing the image to a smaller size, the website loading time reduced and the performance improved greatly. The customer website slowness issue was resolved.
    `,
      Tag: "WPM, NPM, Call-center",
    },
    {
      id: 7,
      caption: "Understanding gaps in the wireless setup deployment",
      Summary: "Complaints of poor wireless connectivity ",
      BreifSummary: `The customer often faced complaints of poor wireless connectivity from their users.`,
      Resolution: `After putting the whole wireless infra under monitoring, it was observed that there were some clusters with a very high number of users connected to a single access point. Through custom properties, the team had exact idea of the region, office, location, floor of the device and through the wireless data, the users connected on the access point and their signal strength values as well. Accordingly, customer understood the need to expanding the wireless infrastructure. In a course of few months, the customer resolved the issues at all their sites, and they saw a drastic decrease in the number of cases reported for network issues.`,
      Tag: "NPM, Manufacturing Customer",
    },
    // {
    //   id: 8,
    //   caption: "Identifying causes of slowness",
    //   Summary: "Slowness in the network.",
    //   BreifSummary: `We asked the network team to configure NetFlow on their routers. Using NTA, it was found that their patching activity was being carried out unthrottled, which was causing the bandwidth to be completely utilized. Also, there were some machines which were not getting patched through their relay architecture, and were directly reporting to the main server, hence hogging bandwidth on both sides.
    //                  After reporting this, the customer improved their relay architecture, changed the scheduled timings for patching activity and throttled the maximum bandwidth that could be taken by their patching solution. After a few weeks, customer saw drastic improvement in their network performance.
    //           `,

    //   Tag: "NPM, Bank",
    // },
    {
      id: 9,
      caption:
        "Integration with Slack/Microsoft Teams and Existing SMS Gateways",
      Summary: "Request for smart alerting in the tools ",
      BreifSummary: `Customers have requested for smart alerting in the tools they already have in their environment – Teams, Slack, etc. and the critical alerts to be received in the form of messages.`,
      Resolution: `Using the API integrations provided by SMS Gateways and Teams/Slack, we created requests to trigger to the server every time the alert was triggered. Using API integrations, critical SMS alerts were sent on the engineer’s phone.`,
      Tag: "NPM, API Integration, Alert",
    },
    {
      id: 10,
      caption: "Identifying ISP Slowness",
      Summary: "Observed latency from their ISP end",
      BreifSummary: `Customer reported that they have observed latency from their ISP end, but were not able to completely confirm it.`,
      Resolution: ` Using the SolarWinds NetPath feature, we created multiple NetPath from their various locations. NetPath showed slowness whenever it occurred and also demonstrated which hop was the culprit. Through NetPath, the customer was able to identify slowness in the ISP environment, and get it rectified.
              `,
      Tag: "NPM, NetPath, Stock Exchange",
    },
    {
      id: 11,
      caption: "Identifying the reason for BGP neighbor down ",
      Summary:
        "Customer having large number of branches and each branch connected with more than one ISP link",
      BreifSummary: `The customer having large number of branches and each branch connected with more than one ISP link. Often the engineers would shut one of the links if they experienced some packet loss or latency in order to use a more efficient link during the day. But often the engineers would forget to up the links and hence the traffic flowing through the secondary link instead of primary.`,
      Resolution: `We Created a BGP neighbor down alert. On detecting a BGP neighbor down event, SolarWinds NCM would take a backup of the router’s configuration. Which would then be used by NCM compliance to search for the neighbor shutdown command. If the command was present, then this would show up in the report.
              `,
      Tag: "NCM",
    },
    {
      id: 12,
      caption: "Router last reload reason",
      Summary: "The last reload reason for Branch routers after an outage.",
      BreifSummary: `One of our banking customer wanted to know the last reload reason for Branch routers after an outage.`,
      Resolution: `We first identified the specific OID value, then used the UnDP to create a custom poller to poll the OID specific value and once we received this value, the value was passed on to the incident ticket information.`,
      Tag: "NPM, Bank",
    },
  ];
  return (
    <>
      <div className="contentt">
        <div className="Carddd">
          {projects.map((contents) => (
            <Detail
              key={contents.id}
              id={contents.id}
              name={contents.caption}
              BreifSummary={contents.BreifSummary}
              Summary={contents.Summary}
              Resolution={contents.Resolution}
              Tag={contents.Tag}
            />
          ))}
        </div>
      </div>
    </>
  );
};
