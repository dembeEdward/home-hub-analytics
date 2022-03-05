cube(`EmergencyServicesComponents`, {
  sql: `SELECT * FROM public.emergency_services_components`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    EmergencyServices: {
      sql: `${CUBE}.emergency_service_id = ${EmergencyServices}.id`,
      relationship: `belongsTo`
    },
    
    EmergencyServicesEstatesEstatesEmergencyServices: {
      sql: `${CUBE}.emergency_service_id = ${EmergencyServicesEstatesEstatesEmergencyServices}.id`,
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
