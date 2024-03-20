import { gql, useMutation } from '@apollo/client'
import React from 'react'

const CREATE_PRODUCT = gql`
mutation CreateProduct($name: String!, $quantityPerUnit: Int!){
    createProduct(record:{
        name: $name,
        quantityperUnit: $quantityPerUnit
    }){
        record{
            name
        }
    }
}`
export default function Mutation() {
    const [createProduct, {data,error,loading}]=useMutation(CREATE_PRODUCT,{
        variables:{
            name:"hotdog",
            quantityPerUnit: 4
        }
    })
  return (
    <div>
        <button onClick={()=> createProduct()}></button>Mutation</div>
  )
}
