'use client';

import { Schema } from '@/amplify/data/resource';
import { useEffect, useState } from 'react';
import { client } from '@/app/amplify-client';

type ProductType = Schema['Product']['type'];

export default function Admin() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data: productList } = await client.models.Product.list();
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  async function createTestProduct() {
    console.log('Click worked function started');
    try {
      const { data: newProduct, errors } = await client.models.Product.create({
        name: 'JournalMan',
        siteType: 'LIVE_SITE',
        content:
          'An academic project done to show the basics of Blazor .Net web server building.',
        liveURL:
          'https://journalman-eecad5hmaqf0a9b0.eastus-01.azurewebsites.net',
        supported: false,
        basePrice: '120.00',
      });

      if (newProduct) {
        setProducts([...products, newProduct]);
      }
    } catch (error) {
      console.error('Error creating product:', error);
    }
  }

  return (
    <main className='p-8 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Admin Portfolio Control</h1>

      <button
        onClick={createTestProduct}
        className='bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-700'
      >
        Add Test Product
      </button>

      {loading && <p>Loading products...</p>}

      {!loading && products.length === 0 && (
        <p className='text-gray-500'>
          No products found click to add test product.
        </p>
      )}

      <ul>
        {products.map((product) => (
          <li key={product.id} className='border p-4 rounded shadow-sm'>
            <h2 className='text-xl font-semibold'>{product.name}</h2>
            <span className='text-xs bg-gray-200 px-2 py-1 rounded'>
              {product.siteType}
            </span>
            <p className='text-gray-600 mt-2'>{product.content}</p>
            <div className='flex justify-between items-center mt-4'>
              <a
                href={product.liveURL}
                target='_blank'
                className='text-blue-500 underline text-sm'
              >
                View Live Demo
              </a>
              <span className='font-bold'>${product.basePrice}</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
