import React from 'react'

import { Card,CardContent } from '@mui/material';
const CategoryList = (props) => {
  return (
    <Card>
      <CardContent>
        <div style={{ fontSize: "1rem" }}>{props.texto}</div>
      </CardContent>
    </Card>
  )
}

export default CategoryList