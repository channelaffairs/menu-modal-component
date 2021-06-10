import { TSimpleListOptios } from "../../Typings"

export const formateCorrectData = (data: any) => {
    const isSectionListData = data.every((option: any) => option.title && option.data)
    return isSectionListData ? data : [{ title: '', data: data.map((option: TSimpleListOptios) => ({ ...option, title: option.label })) }]
}