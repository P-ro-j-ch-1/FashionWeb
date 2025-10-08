import axios from "../axios";

//==================USER==========================//

const createNewUser = (data) => {
    return axios.post(`/api/create-new-user`, data)
}


const handleLoginService = (data) => {
    return axios.post(`/api/login`, data)
}
const checkPhonenumberEmail = (data) => {
    return axios.get(`/api/check-phonenumber-email?phonenumber=${data.phonenumber}&email=${data.email}`)
}

//==================ALLCODE==========================//

const getAllCodeService = (type) => {
    return axios.get(`/api/get-all-code?type=${type}`)
}

//==================PRODUCT==========================//

const getAllProductUser = (data) => {
    return axios.get(`/api/get-all-product-user?limit=${data.limit}&offset=${data.offset}&sortPrice=${data.sortPrice}&sortName=${data.sortName}&categoryId=${data.categoryId}&brandId=${data.brandId}&keyword=${data.keyword}`)
}
const CreateNewProduct = (data) => {
    return axios.post(`/api/create-new-product`, data)
}
const getDetailProductByIdService = (id) => {
    return axios.get(`/api/get-detail-product-by-id?id=${id}`)
}
const UpdateProductService = (data) => {
    return axios.put(`/api/update-product`, data)
}
const getAllProductAdmin = (data) => {
    return axios.get(`/api/get-all-product-admin?limit=${data.limit}&offset=${data.offset}&sortPrice=${data.sortPrice}&sortName=${data.sortName}&categoryId=${data.categoryId}&brandId=${data.brandId}&keyword=${data.keyword}`)

}
const handleBanProductService = (data) => {
    return axios.post(`/api/unactive-product`, data)
}
const handleActiveProductService = (data) => {
    return axios.post(`/api/active-product`, data)
}
const CreateNewProductDetailService = (data) => {
    return axios.post(`/api/create-new-product-detail`, data)
}
const getProductDetailByIdService = (id) => {
    return axios.get(`/api/get-product-detail-by-id?id=${id}`)
}
const UpdateProductDetailService = (data) => {
    return axios.put(`/api/update-product-detail`, data)
}
const getAllProductDetailByIdService = (data) => {
    return axios.get(`/api/get-all-product-detail-by-id?id=${data.id}&limit=${data.limit}&offset=${data.offset}`)
}
const DeleteProductDetailService = (data) => {
    return axios.delete(`/api/delete-product-detail`, data)
}
const getProductDetailImageByIdService = (id) => {
    return axios.get(`/api/get-product-detail-image-by-id?id=${id}`)
}
const getProductDetailSizeByIdService = (id) => {
    return axios.get(`/api/get-detail-product-detail-size-by-id?id=${id}`)
}
const getAllProductDetailImageByIdService = (data) => {
    return axios.get(`/api/get-all-product-detail-image-by-id?id=${data.id}&limit=${data.limit}&offset=${data.offset}`)
}
const createNewProductImageService = (data) => {
    return axios.post(`/api/create-product-detail-image`, data)
}
const UpdateProductDetailImageService = (data) => {
    return axios.put(`/api/update-product-detail-image`, data)
}
const DeleteProductDetailImageService = (data) => {
    return axios.delete(`/api/delete-product-detail-image`, data)
}
const getAllProductDetailSizeByIdService = (data) => {
    return axios.get(`/api/get-all-product-detail-size-by-id?id=${data.id}&limit=${data.limit}&offset=${data.offset}`)
}
const createNewProductSizeService = (data) => {
    return axios.post(`/api/create-product-detail-size`, data)
}
const UpdateProductDetailSizeService = (data) => {
    return axios.put(`/api/update-product-detail-size`, data)
}
const DeleteProductDetailSizeService = (data) => {
    return axios.delete(`/api/delete-product-detail-size`, data)
}

//======================STATISTIC========================//
const getCountCardStatistic = () => {
    return axios.get(`/api/get-count-card-statistic`)
}
const getCountStatusOrder = (data) => {
    return axios.get(`/api/get-count-status-order?oneDate=${data.oneDate}&twoDate=${data.twoDate}&type=${data.type}`)
}
const getStatisticByMonth = (year) => {
    return axios.get(`/api/get-statistic-by-month?year=${year}`)
}
const getStatisticByDay = (data) => {
    return axios.get(`/api/get-statistic-by-day?year=${data.year}&month=${data.month}`)
}


export {
    createNewUser, handleLoginService, checkPhonenumberEmail, getAllCodeService, getAllProductUser,CreateNewProduct,
    getDetailProductByIdService, UpdateProductService, getAllProductAdmin, handleBanProductService, getCountCardStatistic,
    getCountStatusOrder, getStatisticByMonth, getStatisticByDay, CreateNewProductDetailService, getProductDetailByIdService,
    UpdateProductDetailService, getAllProductDetailByIdService, DeleteProductDetailService, getProductDetailImageByIdService,
    getProductDetailSizeByIdService, getAllProductDetailImageByIdService, createNewProductImageService, UpdateProductDetailImageService,
    DeleteProductDetailImageService, getAllProductDetailSizeByIdService, createNewProductSizeService, UpdateProductDetailSizeService,
    DeleteProductDetailSizeService, handleActiveProductService
}