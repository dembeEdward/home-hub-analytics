cube(`Visitors`, {
  sql: `SELECT * FROM public.visitors`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Estates: {
      relationship: 'hasOne',
      sql: `${CUBE}.estate = ${Estates}.id`
    },
    Users_permissionsUser: {
      relationship: 'hasOne',
      sql: `${CUBE}.visiting = ${Users_permissionsUser}.id`
    },
    VisitorVehicles: {
      relationship: 'hasOne',
      sql: `${CUBE}.visitor_vehicle = ${VisitorVehicles}.id`
    },
    VisitorLicenses: {
      relationship: 'hasOne',
      sql: `${CUBE}.visitor_license = ${VisitorLicenses}.id`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, name, surname, createdAt, updatedAt, dateOfVisit]
    },
    countCheckedIn: {
      type: `count`,
      filters: [{sql: `${CUBE}.checked_in IS NOT NULL`}],
      drillMembers: [id, name, surname, createdAt, updatedAt, dateOfVisit]
    },
    countCheckedOut: {
      type: `count`,
      filters: [{sql: `${CUBE}.checked_in IS NOT NULL AND ${CUBE}.checked_out IS NOT NULL`}],
      drillMembers: [id, name, surname, createdAt, updatedAt, dateOfVisit]
    },
    countCancelled: {
      type: `count`,
      filters: [{sql: `${CUBE}.cancelled = 'true'`}],
      drillMembers: [id, name, surname, createdAt, updatedAt, dateOfVisit]
    },
    countNoCheckout: {
      type: `count`,
      filters: [{sql: `${CUBE}.checked_in IS NOT NULL AND ${CUBE}.checked_out IS NULL`}],
      drillMembers: [id, name, surname, createdAt, updatedAt, dateOfVisit]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    cancelled: {
      sql: `cancelled`,
      type: `string`
    },
    
    code: {
      sql: `code`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    surname: {
      sql: `surname`,
      type: `string`
    },
    
    mobile: {
      sql: `mobile`,
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
    
    dateOfVisit: {
      sql: `date_of_visit`,
      type: `time`
    },
    
    timeOfVisit: {
      sql: `time_of_visit`,
      type: `time`
    },
    
    publishedAt: {
      sql: `published_at`,
      type: `time`
    },
    
    checkedIn: {
      sql: `checked_in`,
      type: `time`
    },
    
    checkedOut: {
      sql: `checked_out`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
