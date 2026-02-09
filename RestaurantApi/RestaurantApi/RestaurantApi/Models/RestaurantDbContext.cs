using Microsoft.EntityFrameworkCore;

namespace RestaurantApi.Models
{
    public class RestaurantDbContext : DbContext
    {
        public RestaurantDbContext(DbContextOptions<RestaurantDbContext> options) : base(options)
        {

        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<FoodItem> FoodItems { get; set; }
        public DbSet<OrderMaster> OrderMasters { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Seeding dữ liệu cho Customers
            modelBuilder.Entity<Customer>().HasData(
                new Customer { CustomerID = 1, CustomerName = "Jennifer Acosta" },
                new Customer { CustomerID = 2, CustomerName = "Daniel Hecker" },
                new Customer { CustomerID = 3, CustomerName = "Kate Smith" },
                new Customer { CustomerID = 4, CustomerName = "August Leo" },
                new Customer { CustomerID = 5, CustomerName = "Ava Elliot" },
                new Customer { CustomerID = 6, CustomerName = "Layla Benn" }
            );

            // Seeding dữ liệu cho FoodItems
            modelBuilder.Entity<FoodItem>().HasData(
                new FoodItem { FoodItemId = 1, FoodItemName = "Chicken Tenders", Price = 3.5m },
                new FoodItem { FoodItemName = "Chicken Tenders w/ Fries", FoodItemId = 2, Price = 4.99m },
                new FoodItem { FoodItemName = "Chicken Tenders w/ Onion", FoodItemId = 3, Price = 5.99m },
                new FoodItem { FoodItemName = "Grilled Cheese Sandwich", FoodItemId = 4, Price = 2.5m },
                new FoodItem { FoodItemName = "Grilled Cheese Sandwich w/ Fries", FoodItemId = 5, Price = 3.99m }
            );
        }
    }
}
