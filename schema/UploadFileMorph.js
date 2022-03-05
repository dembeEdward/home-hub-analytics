cube(`UploadFileMorph`, {
  sql: `SELECT * FROM public.upload_file_morph`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    UploadFile: {
      sql: `${CUBE}.upload_file_id = ${UploadFile}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    relatedType: {
      sql: `related_type`,
      type: `string`
    },
    
    field: {
      sql: `field`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
