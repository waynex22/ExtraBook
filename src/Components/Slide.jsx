import React from 'react';
import { Carousel } from 'flowbite-react';
const Slide = () => {
  return (
    <div className="w-full mt-4 mb-4 h-fit rounded-lg grid grid-cols-4 gap-4">
      <div className="col-span-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg row-span-2 w-full">
        <Carousel>
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/NCCThienLongT1123_BannerMainBanner_1920x700.jpg" alt="..." />
          <img src="https://cdn0.fahasa.com/media/magentothem/banner7/NCCMcBooksT1123_BannerSlide_840x320.jpg" alt="..." />
          <img src="https://cdn0.fahasa.com/media/magentothem/banner7/20_11_mainbanner_Slide_840x320.jpg" alt="..." />
          <img src="https://cdn0.fahasa.com/media/magentothem/banner7/DochoiT1123_BannerSlide_840x320.jpg" alt="..." />
          <img src="https://cdn0.fahasa.com/media/magentothem/banner7/DochoiT1123_BannerSlide_840x320.jpg" alt="..." />
        </Carousel>
      </div>
      <div className="col-span-1 overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
        <div className="">
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/ZaloPay11_392x156_1.jpg "
            className="object-fill h-48 w-96" alt="..." />
        </div>
      </div>
      <div className="col-span-1 overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg">
        <div className="">
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-10-2023/VNPAYFHS20_392x156_1.jpg "
            className="object-fill h-48 w-96" alt="..." />
        </div>
      </div>
      <div className="col-span-4">
        <div className="grid grid-cols-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] first-letter:gap-4 rounded-lg">
          <div>
            <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/NCCThienLongT1123_BannerSmallBanner_310x210_1.png"
              className="object-fill h-62 w-96 rounded-lg" alt="..." />
          </div>
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/TrangThieuNhiT923_Banner_SmallBanner_310x210-22_1.png"
            className="object-fill h-62 w-96 rounded-lg" alt="..." />
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/PopmartT1023_Banner_SmallBanner_310x210_4.png"
            className="object-fill h-62 w-96 rounded-lg" alt="..." />
          <img src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/FahasaSaleThu3T1123_W1_Smallbanner_310x210_4.png"
            className="object-fill h-62 w-96 rounded-lg" alt="..." />
        </div>
        <div
          className="w-full bg-white grid grid-cols-9 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg overflow-hidden gap-4 h-fit mt-4">
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/F3T11_120x120.png"
                className="center h-[60px]"alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Sale Thứ 3</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/Icon20_11_120x120.png"
                className="center h-[60px]"alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Tri ân thầy cô</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_FlashSale_Thuong_120x120.png"
                className="center h-[60px]"alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Flash sale</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_MaGiamGia_8px_1.png"
                className="center h-[60px]"alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Mã giảm giá</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/IconDoChoi_Thuong_120x120.png"
                className="center h-[60px]"alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Đồ chơi</div>
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
                className="center h-[60px]"alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Sản phẩm mới</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_PhienChoCu_8px_1.png"
                className="center h-[60px]"alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Chợ cũ</div>
          </div>
          <div className="text-center">
            <div className="flex flex-col justify-center items-center mt-4">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-11-2023/Icon_MangaT11_120x120_1.png"
                className="center h-[60px]"alt='' />
            </div>
            <div className="cms-icon-menu-item-name mb-2 mt-2">Manga</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide