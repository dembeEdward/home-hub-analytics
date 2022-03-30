cube(`Users_permissionsPermission`, {
  sql: `SELECT * FROM public."users-permissions_permission"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {
    Profiles: {
      sql: `${CUBE}.profile = ${Profiles}.id`,
      relationship: `hasOne`,
    },
    Users_permissionsRole: {
      sql: `${CUBE}.role = ${Users_permissionsRole}.id`,
      relationship: `hasOne`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id],
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    enabled: {
      sql: `enabled`,
      type: `string`,
    },

    type: {
      sql: `type`,
      type: `string`,
    },

    controller: {
      sql: `controller`,
      type: `string`,
    },

    action: {
      sql: `action`,
      type: `string`,
    },

    policy: {
      sql: `policy`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
