import { Divider, Heading, useColorModeValue, VStack } from "@chakra-ui/react"
import React from "react"
import BlogTrailerGroup from "./BlogTrailerGroup"
import CategoryListItem from "./CategoryListItem"
import SearchBox from "./SearchBox"
import TagGroup from "./TagGroup"

interface BlogRightSideBarProps {
  grayText: string
  grayBackground: string
  secondaryColor: string
}

const BlogRightSideBar: React.FC<BlogRightSideBarProps> = (
  props: BlogRightSideBarProps
) => {
  const { grayText, grayBackground, secondaryColor } = props
  const whiteBackground = useColorModeValue("white", "gray.600")

  return (
    <VStack as="aside" flex={3} align="start" spacing={10}>
      {/* Search Blog */}
      <SearchBox grayText={grayText} secondaryColor={secondaryColor} />

      {/* Related Post */}
      <BlogTrailerGroup
        grayBackground={grayBackground}
        secondaryColor={secondaryColor}
        title="Related Posts"
      />

      {/* All Categories */}
      <VStack p={4} bgColor={grayBackground} w="full" align="start" spacing={4}>
        <Heading fontWeight={400} size="md">
          All Categories
        </Heading>
        <Divider />
        <VStack w="full" align="start">
          <CategoryListItem
            secondaryColor={secondaryColor}
            grayText={grayText}
            categoryName="Tutorial"
            categoryCount={22}
          />
          <CategoryListItem
            secondaryColor={secondaryColor}
            grayText={grayText}
            categoryName="Tutorial"
            categoryCount={22}
          />
          <CategoryListItem
            secondaryColor={secondaryColor}
            grayText={grayText}
            categoryName="Tutorial"
            categoryCount={22}
          />
          <CategoryListItem
            secondaryColor={secondaryColor}
            grayText={grayText}
            categoryName="Tutorial"
            categoryCount={22}
          />
          <CategoryListItem
            secondaryColor={secondaryColor}
            grayText={grayText}
            categoryName="Tutorial"
            categoryCount={22}
          />
        </VStack>
      </VStack>

      {/* Latest Post */}
      <BlogTrailerGroup
        grayBackground={grayBackground}
        secondaryColor={secondaryColor}
        title="Latest Posts"
      />

      {/* Tag Cloud */}
      <VStack p={4} bgColor={grayBackground} w="full" align="start" spacing={4}>
        <Heading fontWeight={400} size="md">
          Tag Cloud
        </Heading>
        <Divider />
        <TagGroup
          bg={whiteBackground}
          tags={["Tutorial", "Development", "School", "React", "h1llo"]}
        />
      </VStack>
    </VStack>
  )
}

export default BlogRightSideBar
