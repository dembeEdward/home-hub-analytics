cube(`UploadFile`, {
  sql: `SELECT * FROM public.upload_file`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, providerMetadata, provider, name, createdAt, updatedAt]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    formats: {
      sql: `formats`,
      type: `string`
    },
    
    providerMetadata: {
      sql: `provider_metadata`,
      type: `string`
    },
    
    hash: {
      sql: `hash`,
      type: `string`
    },
    
    ext: {
      sql: `ext`,
      type: `string`
    },
    
    mime: {
      sql: `mime`,
      type: `string`
    },
    
    url: {
      sql: `url`,
      type: `string`
    },
    
    previewurl: {
      sql: `${CUBE}."previewUrl"`,
      type: `string`
    },
    
    provider: {
      sql: `provider`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    alternativetext: {
      sql: `${CUBE}."alternativeText"`,
      type: `string`
    },
    
    caption: {
      sql: `caption`,
      type: `string`
    },
    
    createdAt: {
      sql: `created_at`,
      type: `time`
    },
    
    updatedAt: {
      sql: `updated_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
