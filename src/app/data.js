export const serviceCosts = [
  {
    type: "accordion",
    data: {
      items: [
        {
          isOpen: false,
          label: "Query",
          component: {
            type: "codeEditor",
            data: {
              code: 'SELECT\n service,\n SUM(cost) AS total_cost\nFROM\n cloud_costs\nWHERE \n account_type = "production (#24542)"\nGROUP BY\n service\nORDER BY\n total_cost DESC;',
            },
          },
        },
      ],
    },
  },
  {
    type: "accordion",
    data: {
      items: [
        {
          preHeader:
            "Your production account (#24542) has accumulated costs of $100,000 over the past month, here is a spread of cloud costs by services",
          isOpen: true,
          label: "Pie Chart",
          component: {
            type: "pieChart",
            data: [
              {
                id: "ec2",
                label: "EC2",
                value: 30000,
                color: "hsl(180, 70%, 50%)",
              },
              {
                id: "rds",
                label: "RDS",
                value: 20000,
                color: "hsl(293, 70%, 50%)",
              },
              {
                id: "S3",
                label: "S3",
                value: 20000,
                color: "hsl(121, 70%, 50%)",
              },
              {
                id: "OpenSearch",
                label: "OpenSearch",
                value: 10000,
                color: "hsl(88, 70%, 50%)",
              },
              {
                id: "elastiCache",
                label: "ElastiCache",
                value: 10000,
                color: "hsl(311, 70%, 50%)",
              },
              {
                id: "others",
                label: "Others",
                value: 10000,
                color: "hsl(211, 70%, 50%)",
              },
            ],
          },
        },
        {
          isOpen: true,
          label: "You might also want to know.",
          component: {
            type: "suggestions",
            data: [
              {
                label: "Which services cost are rising the fastest?",
                value: "service_costs",
                disabled: true,
              },
              {
                label: "How can I reduce my EC2 costs?",
                value: "ec2",
                disabled: true,
              },
              {
                label: "How can I reduce my RDS costs?",
                value: "rds",
                disabled: true,
              },
              { label: "How can I reduce my S3 costs?", value: "s3" },
            ],
          },
        },
      ],
    },
  },
];

export const s3Costs = [
  {
    type: "accordion",
    data: {
      items: [
        {
          preHeader: `
            <div>You can save <span  style='font-weight: 800'>$2500</span> er month in overall S3 costs. <span  style='color: #357858; text-decoration: underline; cursor: pointer'>Click here</span> to get a details report. <br> Here are your top 2 saving areas.<div>
            `,
          isOpen: true,
          label: "Top 2 saving areas",
          component: {
            type: "information",
            data: [
              {
                id: "xyz",
                label: `<div>Bucket xyz-logs-1 (production account #12345) <br> This bucket has<span  style='font-weight: 800'> 1 TB</span> of data, and it does not use any storage tiers. There is more than <span  style='font-weight: 800'>500 GB</span> of data that has not been accessed. You can save <span  style='font-weight: 800'>$1000</span> by deleting that data or <span  style='font-weight: 800'>$700</span> by moving them to lower tier.</div>`,
              },
              {
                id: "abc",
                label: `<div>Bucket xyz-logs-1 (production account #12345) <br> This bucket has<span  style='font-weight: 800'> 1 TB</span> of data, and it does not use any storage tiers. There is more than <span  style='font-weight: 800'>500 GB</span> of data that has not been accessed. You can save <span  style='font-weight: 800'>$1000</span> by deleting that data or <span  style='font-weight: 800'>$700</span> by moving them to lower tier.</div>`,
              },
            ],
          },
        },
        {
          isOpen: true,
          label: "You might also want to know.",
          component: {
            type: "suggestions",
            data: [
              {
                label: "How to move data to a lower tier?",
                value: "service_costs",
                disabled: true,
              },
              {
                label: "What constitutes high reading?",
                value: "ec2",
                disabled: true,
              },
              {
                label: "How to read smaller chunks of data?",
                value: "rds",
                disabled: true,
              },
              {
                label: "How to change to a more cost effective storage?",
                value: "s3",
                disabled: true,
              },
            ],
          },
        },
      ],
    },
  },
];

export const ec2Costs = [
  {
    type: "accordion",
    data: {
      items: [
        {
          preHeader: "Here is the breakdown of the costs.",
          isOpen: true,
          label: "Top 2 saving areas",
          component: {
            type: "sankey",
          },
        },
        {
          isOpen: true,
          label: "You might also want to know.",
          component: {
            type: "suggestions",
            data: [
              {
                label: "How to move data to a lower tier?",
                value: "service_costs",
                disabled: true,
              },
              {
                label: "What constitutes high reading?",
                value: "ec2",
                disabled: true,
              },
              {
                label: "How to read smaller chunks of data?",
                value: "rds",
                disabled: true,
              },
              {
                label: "How to change to a more cost effective storage?",
                value: "s3",
                disabled: true,
              },
            ],
          },
        },
      ],
    },
  },
];
