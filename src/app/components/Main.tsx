"use client";
import MainLayout from '../components/layout/MainLayout';
import DealsSection from '../components/DealsSection';
import ProductGrid from '../components/ProductGrid';
import SupplierRequestSection from '../components/SupplierRequestSection';
import RecommendedItems from '../components/RecommendedItems';
import ServicesSection from '../components/ServicesSection';
import SuppliersSection from '../components/SuppliersSection';
import Newsletter from '../components/Newsletter';
import TopNavigationMenu from './TopNavigation';
import BannerSection from './BannerSection';
import ProductGrid2 from './ProductGrid2';
import homeProducts from '@/data/homeProducts';
import electronicProducts from '@/data/electronicProducts';

const Index = () => {
  return (
    
    <MainLayout>
        <TopNavigationMenu/>
      {/* Categories sidebar and hero banner */}
      <div className="flex flex-col md:flex-row mb-8">
        {/* <CategorySidebar /> */}
        
        {/* Banner and user info cards */}
        <div className="flex-1 md:ml-6 mt-6 md:mt-0">
          <BannerSection/>
        </div>
      </div>
      
      {/* Deals and offers */}
      <DealsSection />

      {/* Home and outdoor */}
      <ProductGrid title="Home and outdoor" items={homeProducts} />

      {/* Consumer electronics and gadgets */}
      <ProductGrid2 title="Consumer electronics and gadgets" items={electronicProducts} />

      {/* Request to suppliers */}
      <SupplierRequestSection />

      {/* Recommended items */}
      <RecommendedItems />

      {/* Our services */}
      <ServicesSection />

      {/* Suppliers by region */}
      <SuppliersSection />

      {/* Newsletter */}
      <Newsletter />
    </MainLayout>
  );
};

export default Index;