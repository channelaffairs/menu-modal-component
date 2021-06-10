export type TItem = {
    subItems?: TItem[],
    title: string,
    icon?: string,
    avatar?: string
    subTitle?: string
}

export type TOptions = {
    title: string,
    data: Pick<TItem, 'title' | 'icon' | 'avatar' | 'subTitle'>[]
}