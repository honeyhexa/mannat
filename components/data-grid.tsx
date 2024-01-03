import React from 'react'

const DataGrid = ({ data, view: View }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {data.map((o: any, i: React.Key) => <View key={i} {...o} />)}
      </div>
  )
}

export default DataGrid