cube(`VisitorLicenses`, {
  sql: `SELECT * FROM public.visitor_licenses`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, idtype, sadccountry, idno, lastname, createdAt, updatedAt, validdateto, validdatefrom]
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    idtype: {
      sql: `${CUBE}."IDType"`,
      type: `string`
    },
    
    licenceissueno: {
      sql: `${CUBE}."licenceIssueNo"`,
      type: `string`
    },
    
    licencestate: {
      sql: `${CUBE}."licenceState"`,
      type: `string`
    },
    
    gender: {
      sql: `gender`,
      type: `string`
    },
    
    licenceno: {
      sql: `${CUBE}."licenceNo"`,
      type: `string`
    },
    
    initials: {
      sql: `initials`,
      type: `string`
    },
    
    issuedplace: {
      sql: `${CUBE}."issuedPlace"`,
      type: `string`
    },
    
    restrictions: {
      sql: `restrictions`,
      type: `string`
    },
    
    endorsement: {
      sql: `endorsement`,
      type: `string`
    },
    
    sadccountry: {
      sql: `${CUBE}."SADCCountry"`,
      type: `string`
    },
    
    idno: {
      sql: `${CUBE}."IDNo"`,
      type: `string`
    },
    
    image: {
      sql: `image`,
      type: `string`
    },
    
    lastname: {
      sql: `${CUBE}."lastName"`,
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
    
    validdateto: {
      sql: `${CUBE}."validDateTo"`,
      type: `time`
    },
    
    validdatefrom: {
      sql: `${CUBE}."validDateFrom"`,
      type: `time`
    },
    
    publishedAt: {
      sql: `published_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
