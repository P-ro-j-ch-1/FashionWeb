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
const UpdateUserService = (data) => {
    return axios.put(`/api/update-user`, data)
}
const getDetailUserById = (id) => {
    return axios.get(`/api/get-detail-user-by-id?id=${id}`)
}
const handleSendVerifyEmail = (data) => {
    return axios.post(`/api/send-verify-email`, data)
}
const handleChangePassword = (data) => {
    return axios.post(`/api/changepassword`, data)
}
const getAllUsers = (data) => {
    return axios.get(`/api/get-all-user?limit=${data.limit}&offset=${data.offset}&keyword=${data.keyword}`)

}
const DeleteUserService = (userId) => {
    return axios.delete(`/api/delete-user`, {
        data: {
            id: userId
        }
    })
}

//==================ADDRESS USER==========================//

const createNewAddressUserrService = (data) => {
    return axios.post(`/api/create-new-address-user`, data)
}
const deleteAddressUserService = (data) => {
    return axios.delete(`/api/delete-address-user`, data)
}
const editAddressUserService = (data) => {
    return axios.put(`/api/edit-address-user`, data)
}
const getAllAddressUserByUserIdService = (userId) => {
    return axios.get(`/api/get-all-address-user?userId=${userId}`)
}
const getDetailAddressUserByIdService = (id) => {
    return axios.get(`/api/get-detail-address-user-by-id?id=${id}`)

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
const getProductRecommendService = (data) => {
    return axios.get(`/api/get-product-recommend?userId=${data.userId}&limit=${data.limit}`)
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

//======================VOUCHER========================//

const getAllVoucherByUserIdService = (data) => {
    return axios.get(`/api/get-all-voucher-by-userid?limit=${data.limit}&offset=${data.offset}&id=${data.id}`)
}
const getAllVoucher = (data) => {
    return axios.get(`/api/get-all-voucher?limit=${data.limit}&offset=${data.offset}`)
}
const saveUserVoucherService = (data) => {
    return axios.post(`/api/save-user-voucher`, data)
}
const createNewVoucherService = (data) => {
    return axios.post(`/api/create-new-voucher`, data)
}
const updateVoucherService = (data) => {
    return axios.put(`/api/update-voucher`, data)
}
const deleteVoucherService = (data) => {
    return axios.delete(`/api/delete-voucher`, data)
}
const getDetailVoucherByIdService = (id) => {
    return axios.get(`/api/get-detail-voucher?id=${id}`)
}

//======================TYPE VOUCHER========================//

const createNewTypeVoucherService = (data) => {
    return axios.post(`/api/create-new-typevoucher`, data)
}
const updateTypeVoucherService = (data) => {
    return axios.put(`/api/update-typevoucher`, data)
}
const deleteTypeVoucherService = (data) => {
    return axios.delete(`/api/delete-typevoucher`, data)
}
const getDetailTypeVoucherByIdService = (id) => {
    return axios.get(`/api/get-detail-typevoucher?id=${id}`)
}
const getAllTypeVoucher = (data) => {
    return axios.get(`/api/get-all-typevoucher?limit=${data.limit}&offset=${data.offset}`)
}
const getSelectTypeVoucher = () => {
    return axios.get(`/api/get-select-typevoucher`)
}

//======================ORDER========================//

const paymentOrderSuccessService = (data) => {
    return axios.post(`/api/payment-order-success`, data)
}
const updateStatusOrderService = (data) => {
    return axios.put(`/api/update-status-order`, data)
}
const getAllOrdersByUser = (userId) => {
    return axios.get(`/api/get-all-order-by-user?userId=${userId}`)
}
const createNewOrderService = (data) => {
    return axios.post(`/api/create-new-order`, data)
}
const paymentOrderService = (data) => {
    return axios.post(`/api/payment-order`, data)
}
const getAllOrder = (data) => {
    return axios.get(`/api/get-all-order?limit=${data.limit}&offset=${data.offset}&statusId=${data.statusId}`)
}
const getDetailOrder = (id) => {
    return axios.get(`/api/get-detail-order?id=${id}`)
}
const paymentOrderVnpayService = (data) => {
    return axios.post(`/api/payment-order-vnpay`, data)
}
const paymentOrderVnpaySuccessService = (data) => {
    return axios.post(`/api/payment-order-vnpay-success`, data)
}
const confirmOrderVnpay = (data) => {
    return axios.post(`/api/vnpay_return`, data)
}

//======================SHOPCART========================//

const addShopCartService = (data) => {
    return axios.post(`/api/add-shopcart`, data)
}
const getAllShopCartByUserIdService = (id) => {
    return axios.get(`/api/get-all-shopcart-by-userId?id=${id}`)
}
const deleteItemShopCartService = (data) => {
    return axios.delete(`/api/delete-item-shopcart`, data)
}

const listRoomOfUser = (userId) => {
    return axios.get(`/api/listRoomOfUser?userId=${userId}`)

}

//======================TYPE SHIP========================//

const getAllTypeShip = (data) => {
    return axios.get(`/api/get-all-typeship?limit=${data.limit}&offset=${data.offset}&keyword=${data.keyword}`)
}
const createNewTypeShipService = (data) => {
    return axios.post(`/api/create-new-typeship`, data)
}
const updateTypeShipService = (data) => {
    return axios.put(`/api/update-typeship`, data)
}
const deleteTypeShipService = (data) => {
    return axios.delete(`/api/delete-typeship`, data)
}
const getDetailTypeShipByIdService = (id) => {
    return axios.get(`/api/get-detail-typeship?id=${id}`)
}

//======================REVIEW========================//

const createNewReviewService = (data) => {
    return axios.post(`/api/create-new-review`, data)
}
const getAllReviewByProductIdService = (id) => {
    return axios.get(`/api/get-all-review-by-productId?id=${id}`)
}
const ReplyReviewService = (data) => {
    return axios.post(`/api/reply-review`, data)
}
const deleteReviewService = (data) => {
    return axios.delete(`/api/delete-review`, data)
}

//======================SUPPLIER========================//

const getAllSupplier = (data) => {
    return axios.get(`/api/get-all-supplier?limit=${data.limit}&offset=${data.offset}&keyword=${data.keyword}`)
}
const createNewSupplierService = (data) => {
    return axios.post(`/api/create-new-supplier`, data)
}
const updateSupplierService = (data) => {
    return axios.put(`/api/update-supplier`, data)
}
const deleteSupplierService = (data) => {
    return axios.delete(`/api/delete-supplier`, data)
}
const getDetailSupplierByIdService = (id) => {
    return axios.get(`/api/get-detail-supplier?id=${id}`)
}

//======================RECEIPT========================//

const getAllReceipt = (data) => {
    return axios.get(`/api/get-all-receipt?limit=${data.limit}&offset=${data.offset}`)
}
const createNewReceiptService = (data) => {
    return axios.post(`/api/create-new-receipt`, data)
}
const updateReceiptService = (data) => {
    return axios.put(`/api/update-receipt`, data)
}
const deleteReceiptService = (data) => {
    return axios.delete(`/api/delete-receipt`, data)
}
const getDetailReceiptByIdService = (id) => {
    return axios.get(`/api/get-detail-receipt?id=${id}`)
}
const createNewReceiptDetailService = (data) => {
    return axios.post(`/api/create-new-detail-receipt`, data)
}

export {
    createNewUser, handleLoginService, checkPhonenumberEmail, getAllCodeService, getAllProductUser,CreateNewProduct,
    getDetailProductByIdService, UpdateProductService, getAllProductAdmin, handleBanProductService, getCountCardStatistic,
    getCountStatusOrder, getStatisticByMonth, getStatisticByDay, CreateNewProductDetailService, getProductDetailByIdService,
    UpdateProductDetailService, getAllProductDetailByIdService, DeleteProductDetailService, getProductDetailImageByIdService,
    getProductDetailSizeByIdService, getAllProductDetailImageByIdService, createNewProductImageService, UpdateProductDetailImageService,
    DeleteProductDetailImageService, getAllProductDetailSizeByIdService, createNewProductSizeService, UpdateProductDetailSizeService,
    DeleteProductDetailSizeService, handleActiveProductService, getAllVoucherByUserIdService, paymentOrderSuccessService,
    updateStatusOrderService, getAllOrdersByUser, UpdateUserService, getDetailUserById, handleSendVerifyEmail,
    createNewAddressUserrService, deleteAddressUserService, editAddressUserService, getAllAddressUserByUserIdService, 
    getDetailAddressUserByIdService, addShopCartService, getAllShopCartByUserIdService, deleteItemShopCartService,
    listRoomOfUser, handleChangePassword, DeleteUserService, getAllUsers, getAllTypeShip, getProductRecommendService,
    createNewReviewService, getAllReviewByProductIdService, ReplyReviewService, deleteReviewService,createNewOrderService,
    paymentOrderService, getAllOrder, getDetailOrder, getAllSupplier, createNewReceiptService, deleteSupplierService,
    updateSupplierService, createNewSupplierService, getDetailSupplierByIdService, getAllReceipt, updateReceiptService,
    deleteReceiptService, getDetailReceiptByIdService, createNewReceiptDetailService, paymentOrderVnpayService, 
    paymentOrderVnpaySuccessService, confirmOrderVnpay, getAllVoucher, saveUserVoucherService, createNewVoucherService,
    updateVoucherService, deleteVoucherService, getDetailVoucherByIdService, createNewTypeVoucherService, updateTypeVoucherService,
    deleteTypeVoucherService, getDetailTypeVoucherByIdService, getAllTypeVoucher, getSelectTypeVoucher, createNewTypeShipService,
    updateTypeShipService, deleteTypeShipService, getDetailTypeShipByIdService,
}