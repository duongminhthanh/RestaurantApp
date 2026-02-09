using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RestaurantApi.Models
{
    public class OrderDetail
    {
        [Key]
        public long OrderDetailId { get; set; }

        public long OrderMasterId { get; set; }
        [ForeignKey("OrderMasterId")]
        public OrderMaster? OrderMaster { get; set; }
        public int FoodItemId { get; set; }
        //Reationship
        [ForeignKey("FoodItemId")]
        public FoodItem? FoodItem { get; set; }

        public decimal FoodItemPrice { get; set; }

        public int Quantity { get; set; }
    }
}
