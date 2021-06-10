import React from "react"

export type TItem = {
    subItems?: TItem[],
    title: string,
    icon?: string,
    avatar?: string
    subTitle?: string
}

export type TSectionListOptions = {
    title: string,
    data: Pick<TItem, 'title' | 'icon' | 'avatar' | 'subTitle'>[]
}

export type TSimpleListOptios = {
    icon: any,
    label: string,
    isNavigatable: boolean,
    childComponent?: React.ReactNode,
    props?: any,
    onPress?: () => void
}