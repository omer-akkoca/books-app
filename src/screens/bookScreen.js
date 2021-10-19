import React, { useState } from 'react'
import { ScrollView, StyleSheet } from "react-native"
import BookList from '../components/bookList'
import PageTransition from '../components/pageTransition'

const BookScreen = () => {

    const [page, setpage] = useState(1)

    return (
        <ScrollView>
            <PageTransition key="1" page={page} setpage={setpage}/>
            <BookList page={page}/>
            <PageTransition key="2" page={page} setpage={setpage}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

export default BookScreen;