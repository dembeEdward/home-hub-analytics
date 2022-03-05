cube(`Communications`, {
  sql: `SELECT * FROM public.communications`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Estates: {
      relationship: 'hasOne',
      sql: `${CUBE}.estate = ${Estates}.id`
    },
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, title, subtitle, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    subtitle: {
      sql: `subtitle`,
      type: `string`
    },
    
    content: {
      sql: `content`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    },
    
    publishedAt: {
      sql: `published_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
