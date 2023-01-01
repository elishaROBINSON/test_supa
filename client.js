const { createClient } = require('@supabase/supabase-js')

const supabase = createClient('', '', {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
})

const channel = supabase
  .channel('table-db-changes')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'pricer',
    },
    (payload) => console.log(payload)
  )
  .subscribe()