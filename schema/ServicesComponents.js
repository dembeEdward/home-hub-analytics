cube(`ServicesComponents`, {
  sql: `SELECT * FROM public.services_components`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Services: {
      sql: `${CUBE}.service_id = ${Services}.id`,
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
    
    field: {
      sql: `field`,
      type: `string`
    },
    
    componentType: {
      sql: `component_type`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
