import React from 'react'
import { Carousel } from 'flowbite-react'
import ProductList from './ProductList'
import { TEAnimation } from "tw-elements-react"

const Slide = () => {
  return (
    <div className="w-full mt-4 mb-4 h-fit rounded-lg grid grid-cols-4 gap-4">
      <div className="col-span-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg row-span-2 w-full">
        <Carousel>
          <img src="https://nhasachphuongnam.com/images/promo/267/YES_2023_890x396__5_.jpg" alt="..." />
          <img src="https://nhasachphuongnam.com/images/promo/265/Banner_KM_Bang_Dia_890x396px_Mesa_de_trabajo_1__2_.jpg" alt="..." />
          <img src="https://nhasachphuongnam.com/images/promo/265/Banner_Lich_2024_890x396px-01.jpg" alt="..." />
          <img src="https://cdn0.fahasa.com/media/magentothem/banner7/TDochoiT12_Banner_840x320_1.jpg" alt="..." />
          <img src="https://cdn0.fahasa.com/media/magentothem/banner7/DochoiT1123_BannerSlide_840x320.jpg" alt="..." />
        </Carousel>
      </div>
      <div className="col-span-1 overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
        <div className="">
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2023/VNpayT12_392x156.png "
            className="object-fill h-48 w-96" alt="..." />
        </div>
      </div>
      <div className="col-span-1 overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
        <div className="">
          <img src="https://nhasachphuongnam.com/images/promo/265/bottom.png"
            className="object-fill h-48 w-96" alt="..." />
        </div>
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] first-letter:gap-4 rounded-lg">
          <div>
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2023/HTĐonHang_SBanner_310x210.png"
              className="object-fill h-62 w-96 rounded-lg" alt="..." />
          </div>
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/TrangThieuNhiT923_Banner_SmallBanner_310x210-22_1.png"
            className="object-fill h-62 w-96 rounded-lg" alt="..." />
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2023/NoelCMST1123_SmallBanner_310x210PNG.png"
            className="object-fill h-62 w-96 rounded-lg" alt="..." />
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2023/Branday_T12_Resize_310x210.png"
            className="object-fill h-62 w-96 rounded-lg" alt="..." />
        </div>
        <div
          className="w-full bg-white grid grid-cols-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg overflow-hidden gap-4 h-fit mt-4">
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/F3T11_120x120.png"
                className="center h-[60px]" alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Sale Thứ 3</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2023/YearAndSale.png"
                className="center h-[60px]" alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Years and sale</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2023/UuDaiThuongHieu.png"
                className="center h-[60px]" alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Ưu đãi thương hiệu</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_8px_1.png"
                className="center h-[60px]" alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Mã giảm giá</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-12-2023/Icon_CayThongNoel_120x120.png"
                className="center h-[60px]" alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Giáng sinh</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2023/Icon_MayTinh_120x120_1.png"
                className="center h-[60px]" alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Máy tính</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_8px_1.png"
                className="center h-[60px]" alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Sản phẩm mới</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_PhienChoCu_8px_1.png"
                className="center h-[60px]" alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Chợ cũ</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/Icon_MangaT11_120x120_1.png"
                className="center h-[60px]" alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Manga</div>
          </div>
        </div>
        <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-full h-fit overflow-hidden mt-4 ">
          <div className="flex justify-start items-center bg-red-100">
            <img className="ml-2 center h-[30px]"
              src="https://cdn0.fahasa.com/skin/frontend/base/default/images/ico_dealhot.png" alt="noi bat" />
            <h1
              className="text-2xl p-4 text-start font-bold from-red-600 via-orange-500 to-orange-300 bg-gradient-to-r bg-clip-text text-transparent">
              Truyện Manga</h1>
          </div>
          <TEAnimation
            animation="[fade-in-right_1s_ease-in-out]"
            start="onLoad">
            <div className="mx-auto">
              <ProductList />
            </div>
          </TEAnimation>
        </div>
      </div>
    </div>
  )
}

export default Slide