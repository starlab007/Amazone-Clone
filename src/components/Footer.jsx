export default function Footer() {
  return (
    <footer className='mt-8'>
      <div
  className="bg-[#37475A] text-white h-12 flex items-center justify-center cursor-pointer hover:bg-[#485769] transition"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  Back to Top
</div>


      <div className='bg-[#232F3E] text-white py-10'>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div>
            <h3 className='font-bold mb-3'>Get to Know Us</h3>
            <ul className='text-gray-300 space-y-2'>
              <li className='hover:text-white transition cursor-pointer'>Careers</li>
              <li className='hover:text-white transition cursor-pointer'>Blog</li>
              <li className='hover:text-white transition cursor-pointer'>About Amazon</li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-3'>Make Money with Us</h3>
            <ul className='text-gray-300 space-y-2'>
              <li className='hover:text-white transition cursor-pointer'>Sell on Amazon</li>
              <li className='hover:text-white transition cursor-pointer'>Affiliate</li>
              <li className='hover:text-white transition cursor-pointer'>Advertise</li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-3'>Payment Products</h3>
            <ul className='text-gray-300 space-y-2'>
              <li className='hover:text-white transition cursor-pointer'>Amazon Pay</li>
              <li className='hover:text-white transition cursor-pointer'>Gift Cards</li>
              <li className='hover:text-white transition cursor-pointer'>Wallet</li>
            </ul>
          </div>
          <div>
            <h3 className='font-bold mb-3'>Let Us Help You</h3>
            <ul className='text-gray-300 space-y-2'>
              <li className='hover:text-white transition cursor-pointer'>Returns</li>
              <li className='hover:text-white transition cursor-pointer'>Order Status</li>
              <li className='hover:text-white transition cursor-pointer'>Help</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-[#232F3E] text-gray-300 text-center py-6'>
        <div className='max-w-7xl mx-auto px-4'>
          © 1996-2025, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
}
