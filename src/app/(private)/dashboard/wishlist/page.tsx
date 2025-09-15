"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, Star, Clock, ShoppingCart, X, Search } from "lucide-react";
import EmptyWishlistState from "@/feature/wishlist/components/EmptyWishlistState";

export default function WishlistSection() {
  //   const { user, isLoading } = useUser();
  const [searchTerm, setSearchTerm] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wishlistItems: any[] = [];
  // user?.isNewUser || !user?.wishlist?.length ? [] : user.wishlist;

  //   if (isLoading) {
  //     return <div>Loading wishlist...</div>;
  //   }

  //   if (!user) {
  //     return <div>Error loading user data</div>;
  //   }

  if (
    // user.isNewUser ||
    wishlistItems.length === 0
  ) {
    return <EmptyWishlistState />;
  }

  const filteredItems = wishlistItems.filter(
    (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())
    // ||item.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const removeFromWishlist = (id: number) => {
    // Simulate removing from wishlist
    console.log(`Removing from wishlist: ${id}`);
  };

  const totalValue = wishlistItems.reduce(
    (sum, item) => sum + Number.parseFloat(item.originalPrice.replace("$", "")),
    0
  );
  const totalSavings = wishlistItems.reduce(
    (sum, item) =>
      sum +
      (Number.parseFloat(item.originalPrice.replace("$", "")) -
        Number.parseFloat(item.price.replace("$", ""))),
    0
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-balance">
          My Wishlist
        </h1>
        <p className="text-muted-foreground text-pretty">
          Courses you want to take later
        </p>
      </div>

      {/* Summary Card */}
      {wishlistItems.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">
                  {wishlistItems.length} courses in wishlist
                </h3>
                <p className="text-sm text-muted-foreground">
                  Total value:{" "}
                  <span className="line-through">${totalValue.toFixed(2)}</span>{" "}
                  <span className="font-semibold text-primary">
                    Save ${totalSavings.toFixed(2)}
                  </span>
                </p>
              </div>
              <Button size="lg" className="gap-2">
                <ShoppingCart className="h-4 w-4" />
                Add All to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search wishlist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </CardContent>
      </Card>

      {/* Wishlist Items */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-48">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-32 md:h-full object-cover"
                  />
                  {item.discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-primary">
                      {item.discount}% OFF
                    </Badge>
                  )}
                </div>

                <div className="flex-1 p-4 md:p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-semibold text-balance">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.instructor}
                      </p>
                      <p className="text-sm text-muted-foreground text-pretty">
                        {item.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{item.rating}</span>
                          <span>
                            ({item.studentsCount.toLocaleString()} students)
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 md:items-end md:justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFromWishlist(item.id)}
                        className="self-end text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </Button>

                      <div className="space-y-2 md:text-right">
                        <div className="flex items-center gap-2 md:justify-end">
                          <span className="text-lg font-bold">
                            {item.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            {item.originalPrice}
                          </span>
                        </div>

                        <div className="flex gap-2 md:flex-col">
                          <Button className="flex-1 md:w-32">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1 md:w-32 bg-transparent"
                          >
                            <Heart className="mr-2 h-4 w-4 fill-current" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && wishlistItems.length > 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No courses found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
